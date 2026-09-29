import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const GITHUB_USERNAME = 'Kenjiroooo';
const API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

interface ContributionData {
  total: { lastYear: number };
  contributions: ContributionDay[];
}

const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function GitHubContributions() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then((json: ContributionData) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) return null; // Gracefully hide on error

  // Build weeks grid from contributions
  const buildWeeks = (contributions: ContributionDay[]) => {
    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    // The API returns data starting from a Sunday.
    // First, figure out the day of week for the first entry to pad if needed.
    if (contributions.length > 0) {
      const firstDate = new Date(contributions[0].date + 'T00:00:00');
      const firstDay = firstDate.getDay(); // 0 = Sun
      // Pad the first week with empty days
      for (let i = 0; i < firstDay; i++) {
        currentWeek.push({ date: '', count: -1, level: -1 });
      }
    }

    contributions.forEach(day => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    // Push remaining days
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  // Get month labels with their starting week index
  const getMonthLabels = (weeks: ContributionDay[][]) => {
    const labels: { month: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      // Find the first valid day in this week
      const validDay = week.find(d => d.date !== '');
      if (validDay) {
        const date = new Date(validDay.date + 'T00:00:00');
        const month = date.getMonth();
        if (month !== lastMonth) {
          labels.push({ month: MONTH_NAMES[month], weekIndex });
          lastMonth = month;
        }
      }
    });

    return labels;
  };

  const handleCellHover = (e: React.MouseEvent, day: ContributionDay) => {
    if (day.date === '' || day.level === -1) return;
    const rect = gridRef.current?.getBoundingClientRect();
    if (!rect) return;

    const date = new Date(day.date + 'T00:00:00');
    const formatted = date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    const countText = day.count === 0 ? 'No contributions' : `${day.count} contribution${day.count > 1 ? 's' : ''}`;

    setTooltip({
      text: `${countText} on ${formatted}`,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top - 40,
    });
  };

  const weeks = data ? buildWeeks(data.contributions) : [];
  const monthLabels = data ? getMonthLabels(weeks) : [];

  return (
    <motion.div
      className="gh-contributions"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <div className="gh-header">
        <div className="gh-header-left">
          <i className="fa-brands fa-github" />
          <span className="gh-title">GitHub Contributions</span>
        </div>
        <div className="gh-header-right">
          {data && (
            <span className="gh-total">
              <strong>{data.total.lastYear.toLocaleString()}</strong> contributions in the last year
            </span>
          )}
        </div>
      </div>

      {/* Graph */}
      <div className="gh-graph-wrapper" ref={gridRef}>
        {loading ? (
          <div className="gh-loading">
            <div className="gh-loading-shimmer" />
          </div>
        ) : (
          <>
            {/* Month labels */}
            <div className="gh-month-labels">
              <div className="gh-day-label-spacer" />
              {monthLabels.map((m, i) => (
                <span
                  key={`${m.month}-${i}`}
                  className="gh-month-label"
                  style={{ gridColumn: m.weekIndex + 1 }}
                >
                  {m.month}
                </span>
              ))}
            </div>

            <div className="gh-graph-body">
              {/* Day of week labels */}
              <div className="gh-day-labels">
                {DAY_LABELS.map((label, i) => (
                  <span key={i} className="gh-day-label">{label}</span>
                ))}
              </div>

              {/* Contribution cells */}
              <div className="gh-grid">
                {weeks.map((week, wi) => (
                  <div key={wi} className="gh-week">
                    {week.map((day, di) => (
                      <div
                        key={`${wi}-${di}`}
                        className={`gh-cell gh-level-${day.level === -1 ? 'empty' : day.level}`}
                        onMouseEnter={(e) => handleCellHover(e, day)}
                        onMouseLeave={() => setTooltip(null)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Tooltip */}
            {tooltip && (
              <div
                className="gh-tooltip"
                style={{ left: tooltip.x, top: tooltip.y }}
              >
                {tooltip.text}
              </div>
            )}
          </>
        )}
      </div>

      {/* Legend */}
      <div className="gh-footer">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="gh-profile-link"
        >
          @{GITHUB_USERNAME} <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
        <div className="gh-legend">
          <span className="gh-legend-label">Less</span>
          <div className="gh-cell gh-level-0" />
          <div className="gh-cell gh-level-1" />
          <div className="gh-cell gh-level-2" />
          <div className="gh-cell gh-level-3" />
          <div className="gh-cell gh-level-4" />
          <span className="gh-legend-label">More</span>
        </div>
      </div>
    </motion.div>
  );
}

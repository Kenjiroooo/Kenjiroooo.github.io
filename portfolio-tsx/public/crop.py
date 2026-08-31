from PIL import Image

try:
    img = Image.open('logo.jpg')
    width, height = img.size
    
    # Crop to 65% of the original size to enlarge the subject
    new_width = int(width * 0.65)
    new_height = int(height * 0.65)
    
    left = (width - new_width) // 2
    top = (height - new_height) // 2
    right = left + new_width
    bottom = top + new_height

    cropped_img = img.crop((left, top, right, bottom))
    
    # Save back
    cropped_img.save('logo.jpg')
    print("Successfully cropped and enlarged logo.")
except Exception as e:
    print("Error:", e)

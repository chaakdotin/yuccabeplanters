import os
from PIL import Image, ExifTags

def fix_orientation(img):
    try:
        for orientation in ExifTags.TAGS.keys():
            if ExifTags.TAGS[orientation] == 'Orientation':
                break
        exif = img._getexif()
        if exif is not None:
            orientation_value = exif.get(orientation)
            if orientation_value == 3:
                img = img.rotate(180, expand=True)
            elif orientation_value == 6:
                img = img.rotate(270, expand=True)
            elif orientation_value == 8:
                img = img.rotate(90, expand=True)
    except Exception as e:
        print(f"⚠️ Could not apply EXIF rotation: {e}")
    return img

def remove_old_webps(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.webp'):
                webp_path = os.path.join(root, file)
                try:
                    os.remove(webp_path)
                    print(f"🗑️ Removed old: {webp_path}")
                except Exception as e:
                    print(f"❌ Failed to delete {webp_path}: {e}")

def convert_images_to_webp(directory):
    supported_formats = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff')

    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(supported_formats):
                file_path = os.path.join(root, file)
                name, _ = os.path.splitext(file)
                webp_path = os.path.join(root, name + ".webp")

                try:
                    with Image.open(file_path) as img:
                        img = fix_orientation(img)
                        img.convert("RGB").save(webp_path, "webp")
                        print(f"✅ Converted: {file_path}")
                except Exception as e:
                    print(f"❌ Failed to convert {file_path}: {e}")

# 🔽 Your base folder
folder_path = "public/img/collections"

# 🧹 Step 1: Remove old WebP files
remove_old_webps(folder_path)

# 🔄 Step 2: Convert all images to WebP
convert_images_to_webp(folder_path)

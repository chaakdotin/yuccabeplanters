import os
from PIL import Image

def convert_images_to_webp(directory):
    supported_formats = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff')

    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(supported_formats):
                file_path = os.path.join(root, file)
                name, _ = os.path.splitext(file)
                webp_path = os.path.join(root, name + ".webp")

                if os.path.exists(webp_path):
                    print(f"🟡 Skipped (already exists): {webp_path}")
                    continue

                try:
                    with Image.open(file_path) as img:
                        img.convert("RGB").save(webp_path, "webp")
                        print(f"✅ Converted: {file_path}")
                except Exception as e:
                    print(f"❌ Failed to convert {file_path}: {e}")

# ✅ Path to your 'collections' folder
folder_path = "public/img/collections"
convert_images_to_webp(folder_path)

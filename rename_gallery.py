import os

gallery_dir = '/home/pooj/22/22/ananthan/src/assets/gallery'
temp_dir = '/home/pooj/22/22/ananthan/src/assets/gallery_temp'

if not os.path.exists(temp_dir):
    os.makedirs(temp_dir)

# Get all files except directories
files = [f for f in os.listdir(gallery_dir) if os.path.isfile(os.path.join(gallery_dir, f))]
# Filter only image files
image_extensions = ('.png', '.jpg', '.jpeg', '.webp')
images = [f for f in files if f.lower().endswith(image_extensions)]
images.sort()

# Move and rename to temp dir first to avoid collision
for i, filename in enumerate(images, 1):
    ext = os.path.splitext(filename)[1]
    new_name = f"{i}{ext}"
    old_path = os.path.join(gallery_dir, filename)
    new_path = os.path.join(temp_dir, new_name)
    os.rename(old_path, new_path)
    print(f"Renaming {filename} -> {new_name}")

# Clear original dir of the images we just moved (they are already moved)
# Move back to original dir
for filename in os.listdir(temp_dir):
    old_path = os.path.join(temp_dir, filename)
    new_path = os.path.join(gallery_dir, filename)
    os.rename(old_path, new_path)

os.rmdir(temp_dir)

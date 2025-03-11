import matplotlib.pyplot as plt
import matplotlib.patches as patches
import matplotlib.animation as animation

# Define positions for the "S" shape.
# Coordinates are chosen so that:
# - Top row (y = 4): columns 0, 1, 2, 3
# - Second row (y = 3): only column 0
# - Middle row (y = 2): columns 0, 1, 2, 3
# - Fourth row (y = 1): only column 3
# - Bottom row (y = 0): columns 0, 1, 2, 3
positions = [
    (0, 4), (1, 4), (2, 4), (3, 4),  # Top row
    (0, 3),                         # Second row
    (0, 2), (1, 2), (2, 2), (3, 2),  # Middle row
    (3, 1),                         # Fourth row
    (0, 0), (1, 0), (2, 0), (3, 0)   # Bottom row
]

# Create a figure and axis.
fig, ax = plt.subplots()
ax.set_xlim(-0.5, 4.5)
ax.set_ylim(-0.5, 4.5)
ax.set_aspect('equal')
ax.axis('off')  # Hide the axes for a cleaner look

# This list will store the patches for later use if needed.
patches_list = []

def init():
    # Initialization function for FuncAnimation.
    # Return an empty list since we'll be adding patches during animation.
    return []

def animate(i):
    # On each frame, add one square if there is one left.
    if i < len(positions):
        pos = positions[i]
        rect = patches.Rectangle(pos, 1, 1, facecolor='skyblue', edgecolor='black')
        ax.add_patch(rect)
        patches_list.append(rect)
    return patches_list

# Create the animation.
ani = animation.FuncAnimation(fig, animate, frames=len(positions)+5, init_func=init, interval=300, blit=True, repeat=False)
plt.show()
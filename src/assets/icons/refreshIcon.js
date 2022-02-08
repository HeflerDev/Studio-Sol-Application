/**
 * The Refresh Icon.
 * Wrote like a function to be easier to handle and use in any context.
 * @param {number} size : The size of the icon in square shape.
 * @param {string} color : The color of the full icon.
 */
const refreshIcon = (
  size = 24,
  color = 'white',
) => `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="refresh_24px">
<path id="icon/navigation/refresh_24px" d="M16.2364 7.7625C15.1482 6.675 13.6548 6 11.9962 6C8.67917 6 6 8.685 6 12C6 15.315 8.67917 18 11.9962 18C14.7955 18 17.1295 16.0875 17.7974 13.5H16.2364C15.621 15.2475 13.955 16.5 11.9962 16.5C9.51219 16.5 7.49343 14.4825 7.49343 12C7.49343 9.5175 9.51219 7.5 11.9962 7.5C13.242 7.5 14.3527 8.0175 15.1632 8.835L12.7467 11.25H18V6L16.2364 7.7625Z" fill="${color}"/>
</g>
</svg>
    `;

export default refreshIcon;

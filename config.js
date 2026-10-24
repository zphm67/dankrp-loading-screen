var gmodLS = {}

/**
 * To get the users avatar and username, a steam web api key is needed.
 * You can get it with your steam account for free here: https://steamcommunity.com/dev/apikey
 * @type {String}
 */
gmodLS.steamWebApiKey = 'DBFAB9253AEF30E0DEB8A14AA743DEE6';

/**
 * A URI path or full URL to the loadingscreen background.
 * Will be centered and streched if needed to the users resolution
 * @type {String}
 */
gmodLS.backgroundImg  = [
    'https://raw.githubusercontent.com/zphm67/dankrp-loading-screen/refs/heads/main/FOLLOW.png',
    'https://raw.githubusercontent.com/zphm67/dankrp-loading-screen/refs/heads/main/assets/images/20250709135557_1.jpg',
    'https://raw.githubusercontent.com/zphm67/dankrp-loading-screen/refs/heads/main/assets/images/20260727160453_1.jpg',
    'https://raw.githubusercontent.com/zphm67/dankrp-loading-screen/refs/heads/main/assets/images/2026084.JPG',
    'https://raw.githubusercontent.com/zphm67/dankrp-loading-screen/refs/heads/main/assets/images/20BBE81.JPG',
    'https://raw.githubusercontent.com/zphm67/dankrp-loading-screen/refs/heads/main/assets/images/IMG_1231.png',
    'https://raw.githubusercontent.com/zphm67/dankrp-loading-screen/refs/heads/main/assets/images/IMG_2628.png',
    'https://raw.githubusercontent.com/zphm67/dankrp-loading-screen/refs/heads/main/assets/images/image.png',
    'https://raw.githubusercontent.com/zphm67/dankrp-loading-screen/refs/heads/main/assets/images/20260730000039_1.jpg',
    'https://raw.githubusercontent.com/zphm67/dankrp-loading-screen/refs/heads/main/assets/images/20260307212641_1.jpg',
    'https://raw.githubusercontent.com/zphm67/dankrp-loading-screen/refs/heads/main/assets/images/20250829202048_1.jpg'
    ];

/**
 * If you want music played in background add your music files here.
 * The music files must be in OGG format to be played correctly.
 * @type {Array}
 */
gmodLS.musicFiles = [
    'music/1.ogg',
    'music/2.ogg',
];

/**
 * Music volume (Float value, max=1)
 * 0   = off/no music
 * 0.5 = 50% volume
 * 1   = full volume
 * @type {Number}
 */
gmodLS.musicVolume = .1;

/**
 * Serverrules - One rule per row
 * @type {Array}
 */
gmodLS.rules = [
    "penis 1",
    "penis 2",
    "penis 3",
    "penis 4",
];

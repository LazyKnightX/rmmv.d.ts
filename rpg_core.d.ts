// Type definitions for RPG Maker MV JS Library v1.1.0
// Project: http://
// Definitions by: aaa<https://>, bbb<https://>
// Definitions: https://

// You must be Uncomment if not reference pixi.d.ts.
// declare namespace PIXI {
//     // aaa
// }


//
declare class Bitmap {
    constructor(width?: number, height?: number);
    addLoadListener(listner: () => any): void;
    adjustTone(r: number, g: number, b: number): void;
    blt(source: Bitmap, sx: number, sy: number, sw: number , sh: number,
        dx: number, dy: number, dw?: number, dh?: number): void;
    fillAll(color: string);
}


/**
 * The static class that carries out graphics processing.
 *
 * @class Graphics
 */
interface GraphicsStatic {
    /**
     * The total frame count of the game screen.
     *
     * @static
     * @property frameCount
     * @type Number
     */
    frameCount: number;

    /**
     * The alias of PIXI.blendModes.NORMAL.
     *
     * @static
     * @property BLEND_NORMAL
     * @type Number
     * @final
     */
    BLEND_NORMAL: PIXI.blendModes;

    /**
     * The alias of PIXI.blendModes.ADD.
     *
     * @static
     * @property BLEND_ADD
     * @type Number
     * @final
     */
    BLEND_ADD: PIXI.blendModes;

    /**
     * The alias of PIXI.blendModes.MULTIPLY.
     *
     * @static
     * @property BLEND_MULTIPLY
     * @type Number
     * @final
     */
    BLEND_MULTIPLY: PIXI.blendModes;

    /**
     * The alias of PIXI.blendModes.SCREEN.
     *
     * @static
     * @property BLEND_SCREEN
     * @type Number
     * @final
     */
    BLEND_SCREEN: PIXI.blendModes;

    /**
     * The width of the game screen.
     *
     * @static
     * @property width
     * @type Number
     */
    width: number;

    /**
     * The height of the game screen.
     *
     * @static
     * @property height
     * @type Number
     */
    height: number;

    /**
     * The width of the window display area.
     *
     * @static
     * @property boxWidth
     * @type Number
     */
    boxWidth: number;

    /**
     * The height of the window display area.
     *
     * @static
     * @property boxHeight
     * @type Number
     */
    boxHeight: number;

    /**
     * The zoom scale of the game screen.
     *
     * @static
     * @property scale
     * @type Number
     */
    scale: number;

    /**
     * Initializes the graphics system.
     *
     * @static
     * @method initialize
     * @param {Number} width The width of the game screen
     * @param {Number} height The height of the game screen
     * @param {String} type The type of the renderer.
     *                 'canvas', 'webgl', or 'auto'.
     */
    initialize(): void;
    initialize(width: number, height: number, type: string): void;

    /**
     * Marks the beginning of each frame for FPSMeter.
     *
     * @static
     * @method tickStart
     */
    tickStart(): void;

    /**
     * Marks the end of each frame for FPSMeter.
     *
     * @static
     * @method tickEnd
     */
    tickEnd(): void;

    /**
     * Renders the stage to the game screen.
     *
     * @static
     * @method render
     * @param {Stage} stage The stage object to be rendered
     */
    render(stage?: Stage): void;

    /**
     * Checks whether the renderer type is WebGL.
     *
     * @static
     * @method isWebGL
     * @return {Boolean} True if the renderer type is WebGL
     */
    isWebGL(): boolean;

    /**
     * Checks whether the current browser supports WebGL.
     *
     * @static
     * @method hasWebGL
     * @return {Boolean} True if the current browser supports WebGL.
     */
    hasWebGL(): boolean;

    /**
     * Checks whether the canvas blend mode 'difference' is supported.
     *
     * @static
     * @method canUseDifferenceBlend
     * @return {Boolean} True if the canvas blend mode 'difference' is supported
     */
    canUseDifferenceBlend(): boolean;

    /**
     * Checks whether the canvas blend mode 'saturation' is supported.
     *
     * @static
     * @method canUseSaturationBlend
     * @return {Boolean} True if the canvas blend mode 'saturation' is supported
     */
    canUseSaturationBlend(): boolean;

    /**
     * Sets the source of the "Now Loading" image.
     *
     * @static
     * @method setLoadingImage
     * @param {String} Path of image
     */
    setLoadingImage(src: string);

    /**
     * Initializes the counter for displaying the "Now Loading" image.
     *
     * @static
     * @method startLoading
     */
    startLoading(): void;

    /**
     * Increments the loading counter and displays the "Now Loading" image if necessary.
     *
     * @static
     * @method updateLoading
     */
    updateLoading(): void;

    /**
     * Erases the "Now Loading" image.
     *
     * @static
     * @method endLoading
     */
    endLoading(): void;

    /**
     * Displays the error text to the screen.
     *
     * @static
     * @method printError
     * @param {String} name The name of the error
     * @param {String} message The message of the error
     */
    printError(name: string, message: string): void;

    /**
     * Shows the FPSMeter element.
     *
     * @static
     * @method showFps
     */
    showFps(): void;

    /**
     * Hides the FPSMeter element.
     *
     * @static
     * @method hideFps
     */
    hideFps(): void;

    /**
     * Loads a font file.
     *
     * @static
     * @method loadFont
     * @param {String} name The face name of the font
     * @param {String} url The url of the font file
     */
    loadFont(name: string, url: string): void;

    /**
     * Checks whether the font file is loaded.
     *
     * @static
     * @method isFontLoaded
     * @param {String} name The face name of the font
     * @return {Boolean} True if the font file is loaded
     */
    isFontLoaded(name: string): boolean;

    /**
     * Starts playback of a video.
     *
     * @static
     * @method playVideo
     * @param {String} src
     */
    playVideo(src: string): void;

    /**
     * Checks whether the video is playing.
     *
     * @static
     * @method isVideoPlaying
     * @return {Boolean} True if the video is playing
     */
    isVideoPlaying(): boolean;

    /**
     * Checks whether the browser can play the specified video type.
     *
     * @static
     * @method canPlayVideoType
     * @param {String} type The video type to test support for
     * @return {Boolean} True if the browser can play the specified video type
     */
    canPlayVideoType(type: string): boolean;

    /**
     * Converts an x coordinate on the page to the corresponding
     * x coordinate on the canvas area.
     *
     * @static
     * @method pageToCanvasX
     * @param {Number} x The x coordinate on the page to be converted
     * @return {Number} The x coordinate on the canvas area
     */
    pageToCanvasX(x: number): number;

    /**
     * Converts a y coordinate on the page to the corresponding
     * y coordinate on the canvas area.
     *
     * @static
     * @method pageToCanvasY
     * @param {Number} y The y coordinate on the page to be converted
     * @return {Number} The y coordinate on the canvas area
     */
    pageToCanvasY(y: number): number;

    /**
     * Checks whether the specified point is inside the game canvas area.
     *
     * @static
     * @method isInsideCanvas
     * @param {Number} x The x coordinate on the canvas area
     * @param {Number} y The y coordinate on the canvas area
     * @return {Boolean} True if the specified point is inside the game canvas area
     */
    isInsideCanvas(x: number, y: number): boolean;

    _width: number;
    _height: number;
    _rendererType: string;
    _boxWidth: number;
    _boxHeight: number;
    _scale: number;
    _realScale : number;
    _errorPrinter: boolean;
    _canvas: HTMLCanvasElement;
    _video: HTMLVideoElement;
    _upperCanvas: HTMLCanvasElement;
    _renderer: PIXI.PixiRenderer;
    _fpsMeter: FPSMeter;
    _modeBox: HTMLDivElement;
    _skipCount: number;
    _maxSkip: number;
    _rendered: boolean;
    _loadingImage: HTMLImageElement;
    _loadingCount: number;
    _fpsMeterToggled: boolean;
    _stretchEnabled: boolean;
    _canUseDifferenceBlend: boolean;
    _canUseSaturationBlend: boolean;
    _hiddenCanvas: HTMLCanvasElement;

    /**
     * @static
     * @method _createAllElements
     * @private
     */
    _createAllElements(): void;

    /**
     * @static
     * @method _updateAllElements
     * @private
     */
    _updateAllElements(): void;

    /**
     * @static
     * @method _updateRealScale
     * @private
     */
    _updateRealScale(): void;

    /**
     * @static
     * @method _makeErrorHtml
     * @param {String} name
     * @param {String} message
     * @return {String}
     * @private
     */
    _makeErrorHtml(name: string, message: string): void;

    /**
     * @static
     * @method _defaultStretchMode
     * @private
     */
    _defaultStretchMode(): void;

    /**
     * @static
     * @method _testCanvasBlendModes
     * @private
     */
    _testCanvasBlendModes(): void;

    /**
     * @static
     * @method _modifyExistingElements
     * @private
     */
    _modifyExistingElements(): void;

    /**
     * @static
     * @method _createErrorPrinter
     * @private
     */
    _createErrorPrinter(): void;

    /**
     * @static
     * @method _updateErrorPrinter
     * @private
     */
    _updateErrorPrinter(): void;

    /**
     * @static
     * @method _createCanvas
     * @private
     */
    _createCanvas(): void;

    /**
     * @static
     * @method _updateCanvas
     * @private
     */
    _updateCanvas(): void;

    /**
     * @static
     * @method _createVideo
     * @private
     */
    _createVideo(): void;

    /**
     * @static
     * @method _updateVideo
     * @private
     */
    _updateVideo(): void;

    /**
     * @static
     * @method _createUpperCanvas
     * @private
     */
    _createUpperCanvas(): void;

    /**
     * @static
     * @method _updateUpperCanvas
     * @private
     */
    _updateUpperCanvas(): void;

    /**
     * @static
     * @method _clearUpperCanvas
     * @private
     */
    _clearUpperCanvas(): void;

    /**
     * @static
     * @method _paintUpperCanvas
     * @private
     */
    _paintUpperCanvas(): void;

    /**
     * @static
     * @method _createRenderer
     * @private
     */
    _createRenderer(): void;

    /**
     * @static
     * @method _updateRenderer
     * @private
     */
    _updateRenderer(): void;

    /**
     * @static
     * @method _createFPSMeter
     * @private
     */
    _createFPSMeter(): void;

    /**
     * @static
     * @method _createModeBox
     * @private
     */
    _createModeBox(): void;

    /**
     * @static
     * @method _createGameFontLoader
     * @private
     */
    _createGameFontLoader(): void;

    /**
     * @static
     * @method _createFontLoader
     * @param {String} name
     * @private
     */
    _createFontLoader(name: string): void;

    /**
     * @static
     * @method _centerElement
     * @param {HTMLElement} element
     * @private
     */
    _centerElement(element: HTMLElement): void;

    /**
     * @static
     * @method _disableTextSelection
     * @private
     */
    _disableTextSelection(): void;

    /**
     * @static
     * @method _disableContextMenu
     * @private
     */
    _disableContextMenu(): void;

    /**
     * @static
     * @method _applyCanvasFilter
     * @private
     */
    _applyCanvasFilter(): void;

    /**
     * @static
     * @method _onVideoLoad
     * @private
     */
    _onVideoLoad(): void;

    /**
     * @static
     * @method _onVideoError
     * @private
     */
    _onVideoError(): void;

    /**
     * @static
     * @method _onVideoEnd
     * @private
     */
    _onVideoEnd(): void;

    /**
     * @static
     * @method _updateVisibility
     * @param {Boolean} videoVisible
     * @private
     */
    _updateVisibility(videoVisible: boolean): void;

    /**
     * @static
     * @method _isVideoVisible
     * @return {Boolean}
     * @private
     */
    _isVideoVisible(): void;

    /**
     * @static
     * @method _setupEventHandlers
     * @private
     */
    _setupEventHandlers(): void;

    /**
     * @static
     * @method _onWindowResize
     * @private
     */
    _onWindowResize(): void;

    /**
     * @static
     * @method _onKeyDown
     * @param {KeyboardEvent} event
     * @private
     */
    _onKeyDown(event: KeyboardEvent): void;

    /**
     * @static
     * @method _switchFPSMeter
     * @private
     */
    _switchFPSMeter(): void;

    /**
     * @static
     * @method _switchStretchMode
     * @return {Boolean}
     * @private
     */
    _switchStretchMode(): void;

    /**
     * @static
     * @method _switchFullScreen
     * @private
     */
    _switchFullScreen(): void;

    /**
     * @static
     * @method _isFullScreen
     * @return {Boolean}
     * @private
     */
    _isFullScreen(): boolean;

    /**
     * @static
     * @method _requestFullScreen
     * @private
     */
    _requestFullScreen(): void;

    /**
     * @static
     * @method _cancelFullScreen
     * @private
     */
    _cancelFullScreen(): void;
}
declare var Graphics: GraphicsStatic;

/**
 * This is not a class, but contains some methods that will be added to the
 * standard Javascript objects.
 *
 * @class JsExtensions
 */
declare class JsExtensions {}

interface Array<T> {
    /**
     * Makes a shallow copy of the array.
     *
     * @method Array.prototype.clone
     * @return {Array} A shallow copy of the array
     */
    clone(): Array<T>;

    /**
     * Checks whether the array contains a given element.
     *
     * @method Array.prototype.contains
     * @param {Any} element The element to search for
     * @return {Boolean} True if the array contains a given element
     */
    contains(element: T): boolean;

    /**
     * Checks whether the two arrays are same.
     *
     * @method Array.prototype.equals
     * @param {Array} array The array to compare to
     * @return {Boolean} True if the two arrays are same
     */
    equals(array: Array<any>): boolean;
}

interface Math {
    /**
     * Generates a random integer in the range (0, max-1).
     *
     * @static
     * @method Math.randomInt
     * @param {Number} max The upper boundary (excluded)
     * @return {Number} A random integer
     */
    randomInt(max: number): number;
}

interface Number {
    /**
     * Returns a number whose value is limited to the given range.
     *
     * @method Number.prototype.clamp
     * @param {Number} min The lower boundary
     * @param {Number} max The upper boundary
     * @return {Number} A number in the range (min, max)
     */
    clamp(min: number, max: number): number;

    /**
     * Returns a modulo value which is always positive.
     *
     * @method Number.prototype.mod
     * @param {Number} n The divisor
     * @return {Number} A modulo value
     */
    mod(n: number): number;

    /**
     * Makes a number string with leading zeros.
     *
     * @method Number.prototype.padZero
     * @param {Number} length The length of the output string
     * @return {String} A string with leading zeros
     */
    padZero(length: number): string;
}

interface String {
    /**
     * Checks whether the string contains a given string.
     *
     * @method String.prototype.contains
     * @param {String} string The string to search for
     * @return {Boolean} True if the string contains a given string
     */
    contains(string): boolean;

    /**
     * Replaces %1, %2 and so on in the string to the arguments.
     *
     * @method String.prototype.format
     * @param {Any} ...args The objects to format
     * @return {String} A formatted string
     */
    format(...args: Array<any>): string;

    /**
     * Makes a number string with leading zeros.
     *
     * @method String.prototype.padZero
     * @param {Number} length The length of the output string
     * @return {String} A string with leading zeros
     */
    padZero(length: number): string;
}

declare class Point extends PIXI.Point {
    /**
     * The point class.
     *
     * @class Point
     * @constructor
     * @param {Number} x The x coordinate
     * @param {Number} y The y coordinate
     */
    constructor(x?: number, y?: number);

    /**
     * The x coordinate.
     *
     * @property x
     * @type Number
     */
    x: number;

    /**
     * The y coordinate.
     *
     * @property y
     * @type Number
     */
    y: number;
}

declare class Rectangle extends PIXI.Rectangle {
    /**
     * @static
     * @property emptyRectangle
     * @type Rectangle
     */
    static emptyRectangle: Rectangle;

    /**
     * The rectangle class.
     *
     * @class Rectangle
     * @constructor
     * @param {Number} x The x coordinate for the upper-left corner
     * @param {Number} y The y coordinate for the upper-left corner
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     */
    constructor(x?: number, y?: number, width?: number, height?: number);

    /**
     * The x coordinate for the upper-left corner.
     *
     * @property x
     * @type Number
     */
    x: number;

    /**
     * The y coordinate for the upper-left corner.
     *
     * @property y
     * @type Number
     */
    y: number;

    /**
     * The width of the rectangle.
     *
     * @property width
     * @type Number
     */
    width: number;

    /**
     * The height of the rectangle.
     *
     * @property height
     * @type Number
     */
    height: number;
}

interface JsonExStatic {
    /**
     * The maximum depth of objects.
     *
     * @static
     * @property maxDepth
     * @type Number
     * @default 100
     */
    maxDepth: number;

    /**
     * Makes a deep copy of the specified object.
     *
     * @static
     * @method makeDeepCopy
     * @param {Object} object The object to be copied
     * @return {Object} The copied object
     */
    makeDeepCopy(object: any): any;

    /**
     * Converts an object to a JSON string with object information.
     *
     * @static
     * @method stringify
     * @param {Object} object The object to be converted
     * @return {String} The JSON string
     */
    stringify(object: any): string;

    /**
     * Parses a JSON string and reconstructs the corresponding object.
     *
     * @static
     * @method parse
     * @param {String} json The JSON string
     * @return {Object} The reconstructed object
     */
    parse(json: string): any;
}

/**
 * The static class that handles JSON with object information.
 *
 * @class JsonEx
 */
declare var JsonEx: JsonExStatic;

declare class ScreenSprite {
    /**
     * The opacity of the sprite (0 to 255).
     *
     * @property opacity
     * @type Number
     */
    opacity: number;

    /**
     * The sprite which covers the entire game screen.
     *
     * @class ScreenSprite
     * @constructor
     */
    constructor();

    /**
     * Sets black to the color of the screen sprite.
     *
     * @method setBlack
     */
    setBlack(): void;

    /**
     * Sets white to the color of the screen sprite.
     *
     * @method setWhite
     */
    setWhite(): void;

    /**
     * Sets the color of the screen sprite by values.
     *
     * @method setColor
     * @param {Number} r The red value in the range (0, 255)
     * @param {Number} g The green value in the range (0, 255)
     * @param {Number} b The blue value in the range (0, 255)
     */
    setColor(r?: number, g?: number, b?: number): void;

    /**
     * @method _renderCanvas
     * @param {PIXI.CanvasRenderer} renderSession
     * @private
     */
    protected _renderCanvas(renderSession: PIXI.CanvasRenderer): void;
}

declare class Sprite extends PIXI.Sprite {
    /**
     * Number of the created objects.
     *
     * @static
     * @property _counter
     * @type Number
     */
    static _counter: number;

    /**
     * The image for the sprite.
     *
     * @property bitmap
     * @type Bitmap
     */
    bitmap: Bitmap;

    /**
     * The width of the sprite without the scale.
     *
     * @property width
     * @type Number
     */
    width: number;

    /**
     * The height of the sprite without the scale.
     *
     * @property height
     * @type Number
     */
    height: number;

    /**
     * The opacity of the sprite (0 to 255).
     *
     * @property opacity
     * @type Number
     */
    opacity: number;

    /**
     * The visibility of the sprite.
     *
     * @property visible
     * @type Boolean
     */
    visible: boolean;

    /**
     * The x coordinate of the sprite.
     *
     * @property x
     * @type Number
     */
    x: number;

    /**
     * The y coordinate of the sprite.
     *
     * @property y
     * @type Number
     */
    y: number;

    /**
     * The origin point of the sprite. (0,0) to (1,1).
     *
     * @property anchor
     * @type Point
     */
    point: Point;

    /**
     * The scale factor of the sprite.
     *
     * @property scale
     * @type Point
     */
    scale: Point;

    /**
     * The rotation of the sprite in radians.
     *
     * @property rotation
     * @type Number
     */
    rotation: number;

    /**
     * The blend mode to be applied to the sprite.
     *
     * @property blendMode
     * @type Number
     */
    blendMode: number;

    /**
     * Sets the filters for the sprite.
     *
     * @property filters
     * @type Array<PIXI.AbstractFilter>
     */
    filters: Array<PIXI.AbstractFilter>;

    /**
     * [read-only] The array of children of the sprite.
     *
     * @property children
     * @type Array<PIXI.DisplayObject>
     */
    children: Array<PIXI.DisplayObject>;

    /**
     * [read-only] The object that contains the sprite.
     *
     * @property parent
     * @type PIXI.DisplayObjectContainer
     */
    parent: PIXI.DisplayObjectContainer;

    spriteId: number;
    opaque: boolean;

    /**
     * The basic object that is rendered to the game screen.
     *
     * @class Sprite
     * @constructor
     * @param {Bitmap} bitmap The image for the sprite
     */
    constructor(bitmap?: Bitmap);

    /**
     * Updates the sprite for each frame.
     *
     * @method update
     */
    update(): void;

    /**
     * @method updateTransform
     * @private
     */
    updateTransform(): void;

    /**
     * Sets the x and y at once.
     *
     * @method move
     * @param {Number} x The x coordinate of the sprite
     * @param {Number} y The y coordinate of the sprite
     */
    move(x: number, y: number): void;

    /**
     * Sets the rectagle of the bitmap that the sprite displays.
     *
     * @method setFrame
     * @param {Number} x The x coordinate of the frame
     * @param {Number} y The y coordinate of the frame
     * @param {Number} width The width of the frame
     * @param {Number} height The height of the frame
     */
    setFrame(x: number, y: number, width: number, height: number): void;

    /**
     * Gets the blend color for the sprite.
     *
     * @method getBlendColor
     * @return {Array} The blend color [r, g, b, a]
     */
    getBlendColor(): Array<number>;

    /**
     * Sets the blend color for the sprite.
     *
     * @method setBlendColor
     * @param {Array} color The blend color [r, g, b, a]
     */
    setBlendColor(color: Array<number>): void;

    /**
     * Gets the color tone for the sprite.
     *
     * @method getColorTone
     * @return {Array} The color tone [r, g, b, gray]
     */
    getColorTone(): Array<number>;

    /**
     * Sets the color tone for the sprite.
     *
     * @method setColorTone
     * @param {Array} tone The color tone [r, g, b, gray]
     */
    setColorTone(tone: Array<number>): void;

    /**
     * Adds a child to the container.
     *
     * @method addChild
     * @param {PIXI.DisplayObject} child The child to add
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Adds a child to the container at a specified index.
     *
     * @method addChildAt
     * @param {PIXI.DisplayObject} child The child to add
     * @param {Number} index The index to place the child in
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

    /**
     * Removes a child from the container.
     *
     * @method removeChild
     * @param {PIXI.DisplayObject} child The child to remove
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Removes a child from the specified index position.
     *
     * @method removeChildAt
     * @param {Number} index The index to get the child from
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChildAt(index: number): PIXI.DisplayObject;

    protected _bitmap: Bitmap;
    protected _frame: Rectangle;
    protected _realFrame: Rectangle;
    protected _offset: Point;
    protected _blendColor: Array<Number>;
    protected _colorTone: Array<Number>;
    protected _canvas: HTMLCanvasElement;
    protected _context: CanvasRenderingContext2D;
    protected _tintTexture: PIXI.BaseTexture;

    /**
     * @method _onBitmapLoad
     * @private
     */
    protected _onBitmapLoad(): void;

    /**
     * @method _refresh
     * @private
     */
    protected _refresh(): void;

    /**
     * @method _isInBitmapRect
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     * @return {Boolean}
     * @private
     */
    protected _isInBitmapRect(x: number, y: number, w: number, h: number): boolean;

    /**
     * @method _needsTint
     * @return {Boolean}
     * @private
     */
    protected _needsTint(): boolean;

    /**
     * @method _createTinter
     * @param {Number} w
     * @param {Number} h
     * @private
     */
    protected _createTinter(w: number, h: number): void;

    /**
     * @method _executeTint
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     * @private
     */
    protected _executeTint(x: number, y: number, w: number, h: number): void;

    /**
     * @method _renderCanvas
     * @param {PIXI.CanvasRenderer} renderSession
     * @private
     */
    protected _renderCanvas(renderSessio: PIXI.CanvasRenderer): void;

    /**
     * @method _renderWebGL
     * @param {PIXI.WebGLRenderer} renderSession
     * @private
     */
    protected _renderWebGL(renderSession: PIXI.WebGLRenderer): void;
}

declare class Stage {
    // The interactive flag causes a memory leak.
    interactive: boolean;

    constructor();

    /**
     * Adds a child to the container.
     *
     * @method addChild
     * @param {PIXI.DisplayObject} child The child to add
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Adds a child to the container at a specified index.
     *
     * @method addChildAt
     * @param {PIXI.DisplayObject} child The child to add
     * @param {Number} index The index to place the child in
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

    /**
     * Removes a child from the container.
     *
     * @method removeChild
     * @param {PIXI.DisplayObject} child The child to remove
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Removes a child from the specified index position.
     *
     * @method removeChildAt
     * @param {Number} index The index to get the child from
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChildAt(index: number): PIXI.DisplayObject;
}

declare class Tilemap extends PIXI.DisplayObjectContainer {
    // Tile type checkers

    static TILE_ID_B: number;
    static TILE_ID_C: number;
    static TILE_ID_D: number;
    static TILE_ID_E: number;
    static TILE_ID_A5: number;
    static TILE_ID_A1: number;
    static TILE_ID_A2: number;
    static TILE_ID_A3: number;
    static TILE_ID_A4: number;
    static TILE_ID_MAX: number;

    static FLOOR_AUTOTILE_TABLE: Array<Array<Array<number>>>;
    static WALL_AUTOTILE_TABLE: Array<Array<Array<number>>>;
    static WATERFALL_AUTOTILE_TABLE: Array<Array<Array<number>>>;


    static isVisibleTile(tileId: number): boolean;
    static isAutotile(tileId: number): boolean;
    static getAutotileKind(tileId: number): number;
    static getAutotileShape(tileId: number): number;
    static makeAutotileId(kind: number, shape: number): number;
    static isSameKindTile(tileID1: number, tileID2: number): boolean;
    static isTileA1(tileId: number): boolean;
    static isTileA2(tileId: number): boolean;
    static isTileA3(tileId: number): boolean;
    static isTileA4(tileId: number): boolean;
    static isTileA5(tileId: number): boolean;
    static isWaterTile(tileId: number): boolean;
    static isWaterfallTile(tileId: number): boolean;
    static isGroundTile(tileId: number): boolean;
    static isShadowingTile(tileId: number): boolean;
    static isRoofTile(tileId: number): boolean;
    static isWallTopTile(tileId: number): boolean;
    static isWallSideTile(tileId: number): boolean;
    static isWallTile(tileId: number): boolean;
    static isFloorTypeAutotile(tileId: number): boolean;
    static isWallTypeAutotile(tileId: number): boolean;
    static isWaterfallTypeAutotile(tileId: number): boolean;

    /**
     * The bitmaps used as a tileset.
     *
     * @property bitmaps
     * @type Array
     */
    bitmaps: Array<Bitmap>;

    /**
     * The origin point of the tilemap for scrolling.
     *
     * @property origin
     * @type Point
     */
    origin: Point;

    /**
     * The tileset flags.
     *
     * @property flags
     * @type Array
     */
    flags: Array<number>;

    /**
     * The animation count for autotiles.
     *
     * @property animationCount
     * @type Number
     */
    animationCount: number;

    /**
     * Whether the tilemap loops horizontal.
     *
     * @property horizontalWrap
     * @type Boolean
     */
    horizontalWrap: boolean;

    /**
     * Whether the tilemap loops vertical.
     *
     * @property verticalWrap
     * @type Boolean
     */
    verticalWrap: boolean;

    /**
     * The width of the screen in pixels.
     *
     * @property width
     * @type Number
     */
    width: number;

    /**
     * The height of the screen in pixels.
     *
     * @property height
     * @type Number
     */
    height: number;

    /**
     * The width of a tile in pixels.
     *
     * @property tileWidth
     * @type Number
     */
    tileWidth: number;

    /**
     * The height of a tile in pixels.
     *
     * @property tileHeight
     * @type Number
     */
    tileHeight: number;

    //-----------------------------------------------------------------------------
    /**
     * The tilemap which displays 2D tile-based game map.
     *
     * @class Tilemap
     * @constructor
     */
    constructor();

    /**
     * Sets the tilemap data.
     *
     * @method setData
     * @param {Number} width The width of the map in number of tiles
     * @param {Number} height The height of the map in number of tiles
     * @param {Array} data The one dimensional array for the map data
     */
    setData(width: number, height: number, data: Array<number>);

    /**
     * Checks whether the tileset is ready to render.
     *
     * @method isReady
     * @type Boolean
     * @return {Boolean} True if the tilemap is ready
     */
    isReady(): boolean;

    /**
     * Updates the tilemap for each frame.
     *
     * @method update
     */
    update(): void;

    /**
     * Forces to repaint the entire static
     *
     * @method refresh
     */
    refresh(): void;

    /**
     * @method updateTransform
     * @private
     */
    updateTransform(): void;

    /**
     * [read-only] The array of children of the sprite.
     *
     * @property children
     * @type Array<PIXI.DisplayObject>
     */
    children: Array<PIXI.DisplayObject>;

    /**
     * [read-only] The object that contains the sprite.
     *
     * @property parent
     * @type PIXI.DisplayObjectContainer
     */
    parent: PIXI.DisplayObjectContainer;

    /**
     * Adds a child to the container.
     *
     * @method addChild
     * @param {PIXI.DisplayObject} child The child to add
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Adds a child to the container at a specified index.
     *
     * @method addChildAt
     * @param {PIXI.DisplayObject} child The child to add
     * @param {Number} index The index to place the child in
     * @return {PIXI.DisplayObject} The child that was added
     */
    addChildAt(child: PIXI.DisplayObject, index: number): PIXI.DisplayObject;

    /**
     * Removes a child from the container.
     *
     * @method removeChild
     * @param {PIXI.DisplayObject} child The child to remove
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChild(child: PIXI.DisplayObject): PIXI.DisplayObject;

    /**
     * Removes a child from the specified index position.
     *
     * @method removeChildAt
     * @param {Number} index The index to get the child from
     * @return {PIXI.DisplayObject} The child that was removed
     */
    removeChildAt(index: number): PIXI.DisplayObject;

    protected _margin: number;
    protected _width: number;
    protected _height: number;
    protected _tileWidth: number;
    protected _tileHeight: number;
    protected _mapWidth: number;
    protected _mapHeight : number;
    protected _mapData: Array<number>;
    protected _layerWidth: number;
    protected _layerHeight: number;
    protected _lastTiles: any;//わからんちん
    protected _lowerLayer: Sprite;
    protected _upperLayer: Sprite;

    /**
     * @method _createLayers
     * @private
     */
    protected _createLayers(): void;

    /**
     * @method _updateLayerPositions
     * @param {Number} startX
     * @param {Number} startY
     * @private
     */
    protected _updateLayerPositions(startX: number, startY: number): void;

    /**
     * @method _paintAllTiles
     * @param {Number} startX
     * @param {Number} startY
     * @private
     */
    protected _paintAllTiles(startX: number, startY: number): void;

    /**
     * @method _paintTiles
     * @param {Number} startX
     * @param {Number} startY
     * @param {Number} x
     * @param {Number} y
     * @private
     */
    protected _paintTiles(startX: number, startY: number, x: number, y: number): void;

    /**
     * @method _readLastTiles
     * @param {Number} i
     * @param {Number} x
     * @param {Number} y
     * @private
     */
    protected _readLastTiles(i: number, x: number, y: number): Array<any>;//わからんちん

    /**
     * @method _writeLastTiles
     * @param {Number} i
     * @param {Number} x
     * @param {Number} y
     * @param {Array} tiles
     * @private
     */
    protected _writeLastTiles(i: number, x: number, y: number, tiles: any): void;//わからんちん

    /**
     * @method _drawTile
     * @param {Bitmap} bitmap
     * @param {Number} tileId
     * @param {Number} dx
     * @param {Number} dy
     * @private
     */
    protected _drawTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * @method _drawNormalTile
     * @param {Bitmap} bitmap
     * @param {Number} tileId
     * @param {Number} dx
     * @param {Number} dy
     * @private
     */
    protected _drawNormalTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * @method _drawAutotile
     * @param {Bitmap} bitmap
     * @param {Number} tileId
     * @param {Number} dx
     * @param {Number} dy
     * @private
     */
    protected _drawAutotile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * @method _drawTableEdge
     * @param {Bitmap} bitmap
     * @param {Number} tileId
     * @param {Number} dx
     * @param {Number} dy
     * @private
     */
    protected _drawTableEdge(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * @method _drawShadow
     * @param {Bitmap} bitmap
     * @param {Number} shadowBits
     * @param {Number} dx
     * @param {Number} dy
     * @private
     */
    protected _drawShadow(bitmap: Bitmap, shadowBits: number, dx: number, dy: number): void;

    /**
     * @method _readMapData
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @return {Number}
     * @private
     */
    protected _readMapData(x: number, y: number, z: number): number;

    /**
     * @method _isHigherTile
     * @param {Number} tileId
     * @return {Boolean}
     * @private
     */
    protected _isHigherTile(tileId: number): boolean;

    /**
     * @method _isTableTile
     * @param {Number} tileId
     * @return {Boolean}
     * @private
     */
    protected _isTableTile(tileId: number): boolean;

    /**
     * @method _isOverpassPosition
     * @param {Number} mx
     * @param {Number} my
     * @return {Boolean}
     * @private
     */
    protected _isOverpassPosition(mx: number, my: number): boolean;

    /**
     * @method _sortChildren
     * @private
     */
    protected _sortChildren(): void;

    /**
     * @method _compareChildOrder
     * @param {Sprite} a
     * @param {Sprite} b
     * @private
     */
    protected _compareChildOrder(a: Sprite, b: Sprite): number;// *スプライトが唐突にZを持つ場合があるぞ
}

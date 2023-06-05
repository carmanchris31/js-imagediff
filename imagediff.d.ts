export type ImageType =
  | HTMLImageElement
  | HTMLCanvasElement
  | CanvasRenderingContext2D
  | ImageData;

interface ImageDiffOptions {
  /** set to 'top' to top-align the images when diffing different sizes. */
  align?: string;
}

/** create a new Canvas element. */
declare function createCanvas(): HTMLCanvasElement;
/** create a new ImageData object. */
declare function createImageData(width: number, height: number): ImageData;
/** tests for Image object. */
declare function isImage(object: unknown): object is HTMLImageElement;
/** tests for Canvas object. */
declare function isCanvas(object: unknown): object is HTMLCanvasElement;
/** tests for CanvasRenderingContext2D object. */
declare function isContext(object: unknown): object is CanvasRenderingContext2D;
/** tests for ImageData object. */
declare function isImageData(object: unknown): object is ImageData;
/** tests for any of the above. */
declare function isImageType(object: unknown): object is ImageType;
/** converts image type object to a new ImageData object. */
declare function toImageData(object: ImageType): ImageData;
/** tests image type objects for equality, accepts tolerance in pixels. */
declare function equal(a: ImageType, b: ImageType, tolerance: number): boolean;
/** performs an image diff on a and b, returning a - b. */
declare function diff(
  a: ImageType,
  b: ImageType,
  options?: ImageDiffOptions
): ImageData;
/** removes imagediff from the global space for compatibility, returning imagediff. */
declare function noConflict(): typeof ImageDiff;
/**
 * (node only) renders the imageData to png in outputFile with optional callback.
 * @throws if not in a node environment
 */
declare function imageDataToPNG(
  data: ImageData,
  outputFile: string,
  callback?: () => unknown
): void;
declare const jasmine: jasmine.CustomMatcherFactories;

declare const ImageDiff: {
  createCanvas: typeof createCanvas;
  createImageData: typeof createImageData;
  isImage: typeof isImage;
  isCanvas: typeof isCanvas;
  isContext: typeof isContext;
  isImageData: typeof isImageData;
  isImageType: typeof isImageType;
  toImageData: typeof toImageData;
  equal: typeof equal;
  diff: typeof diff;
  noConflict: typeof noConflict;
  imageDataToPNG: typeof imageDataToPNG;
  jasmine: typeof jasmine;
};

export default ImageDiff;

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /** expect a result to equal another image type. */
      toImageDiffEqual(expected: ImageType, tolerance?: number): void;
      /** expect a result to be ImageData. */
      toBeImageData(expected: ImageData): void;
    }
  }
}

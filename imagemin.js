import keepfolder from 'imagemin-keep-folder';
// import imagemin from 'imagemin';
import imageminJpegoptim from 'imagemin-jpegoptim';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

await keepfolder(['img_src/**/*.{jpg,png,svg}'], {
  plugins: [
    imageminJpegoptim({
      stripAll: false,
      stripIptc: false,
    }),
    imageminPngquant({
      quality: [0.7, 0.7]
    }),
    imageminSvgo({
      plugins: [
        {removeDoctype: true},
        {removeXMLProcInst: true},
        {removeComments: true},
        {removeMetadata: false},
        {removeEditorsNSData: false},
        {cleanupAttrs: true},
        {mergeStyles: false},
        {inlineStyles: false},
        {minifyStyles: false},
        {cleanupIDs: false},
        {removeUselessDefs: false},
        {cleanupNumericValues: false},
        {convertColors: false},
        {removeUnknownsAndDefaults: false},
        {removeNonInheritableGroupAttrs: false},
        {removeUselessStrokeAndFill: false},
        {removeViewBox: false},
        {cleanupEnableBackground: false},
        {removeHiddenElems: false},
        {removeEmptyText: false},
        {convertShapeToPath: false},
        {convertEllipseToCircle: false},
        {moveElemsAttrsToGroup: false},
        {moveGroupAttrsToElems: false},
        {collapseGroups: false},
        {convertPathData: false},
        {convertTransform: false},
        {removeEmptyAttrs: false},
        {removeEmptyContainers: false},
        {mergePaths: false},
        {removeUnusedNS: false},
        {sortDefsChildren: false},
        {removeTitle: false},
        {removeDesc: false},
      ]
    })
  ],
  replaceOutputDir: output => {
    return output.replace(/img_src\//, 'img/')
  }
});
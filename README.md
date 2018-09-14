# MdLibrary

It is a library of reusable components, which gets packaged and installed into an applications `node_modules` folder, using the namespace `@seismi`.

The library is then imported as a module, and all components are available through the prefix `mdl-`

## Installing the library in your applications

Firstly, make sure you package the library, run `npm run package` from the root of this project.

Then install the library from the root of your application, using `npm install ../md-library/dist/md-library/seismi-md-library-0.0.1.tgz`

In the application `src/app/app.module.ts` import the library module to make the components available
`import { MdLibraryModule } from '@seismi/md-library';`

And add the library module to the imports array
`imports: [MdLibraryModule]`

You can now use any of the components of the library in your application files `<mdl-diagram></mdl-diagram>`

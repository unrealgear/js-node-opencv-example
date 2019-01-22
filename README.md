# js-opencv-example
Examples of using node-opencv. 
 
Link to the library on [GitHub](https://github.com/peterbraden/node-opencv).  
Link to the library on [npm](https://www.npmjs.com/package/opencv).

## Prerequisites 

### cmake

[cmake](https://cmake.org/) has to be installed on your machine.

#### For macOS

Execute in terminal:
```
brew install cmake
``` 

Export path by executing:
```
export PATH="/usr/local/bin:$PATH"
```

#### For other platforms

Follow official [installation guide](https://cmake.org/install/).

### OpenCV

#### For macOS

[Homebrew](https://brew.sh/) (also known as brew) has to be installed.
  
Install opencv@2: 
```
brew install opencv@2
```
  
Link opencv: 
```
brew link opencv@2 --force
```

## Installing project dependencies

In the root of the project execute:
```
npm install
```

## Handling errors

### 403 when downloading from "opencv.s3.amazonaws.com"

#### How it looks like

```
node-pre-gyp ERR! Tried to download(403): https://node-opencv.s3.amazonaws.com/opencv/v6.0.0/Release/node-v48-win32-x64.tar.gz
```

#### Solution

Try executing: 
```
npm install opencv --build-from-source
```  

Link to the [source](https://github.com/peterbraden/node-opencv/issues/463#issuecomment-260166761) of the solution.

### ERROR: failed to run: pkg-config

#### How it looks like

```
/Users/n.riabchenko/WebstormProjects/unrealgear/js-opencv-example/node_modules/opencv/utils/find-opencv.js:21
                throw new Error("ERROR: failed to run: pkg-config", opencv, flag);
                ^

Error: ERROR: failed to run: pkg-config
    at /Users/n.riabchenko/WebstormProjects/unrealgear/js-opencv-example/node_modules/opencv/utils/find-opencv.js:21:23
```

#### Solution #1 for macOS

Execute in terminal:
```
export PKG_CONFIG_PATH=/usr/local/opt/opencv@2/lib/pkgconfig
```

Link to the [source](https://github.com/peterbraden/node-opencv/issues/482#issuecomment-334655101) of the solution.

#### Solution #2 for macOS

Install `pkg-config` and `opencv@2`: 
```
brew install pkg-config opencv@2
```
Link opencv: 
```
brew link opencv@2 --force
```

Link to the [source](https://github.com/gordalina/faced/issues/12#issuecomment-363061428) of the solution.

import ReactDOM from 'react-dom/client';
import {app, BrowserWindow} from 'electron';


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<h1>Hello, world!</h1>);

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })
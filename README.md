# M88 start theme

## Settings init:

### VS Code

In file **.vscode\settings.json**

We need set path to WordPress root folder in lockal WebServer

<code>
{
  "intelephense.environment.documentRoot": "D:\\OpenServer\\domains\\gulp-wp.loc\\",
  "intelephense.environment.includePaths": ["D:\\OpenServer\\domains\\gulp-wp.loc\\"]
}
</code>

### Gulp Settings

- themeName = theme name for build / prod theme
- prodFolder = path for prod Folder
- webServerProxyURL = URL to project on local server
- configFTP = config for upload to FTP

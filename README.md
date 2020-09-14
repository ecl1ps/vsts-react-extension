This a base configuration for **[Azure DevOps](https://azure.microsoft.com/en-us/services/devops/)** (or TFS or Visual Studio Team Services) **[extension](https://docs.microsoft.com/en-us/azure/devops/extend/overview?view=azure-devops&viewFallbackFrom=vsts) development** with the use of **TypeScript** and **React**. 
It is also configured in a way it can be developed on local machine without uploading every change to the server.

Extension is using official [Visual Studio Services Web Extension SDK](https://github.com/microsoft/vss-web-extension-sdk).

## Local extension development

Configure extension to load sources from remote url using `baseUri` in `vss-extension.json` with url of your local development server, default https://localhost:3000/.

Configure your local development server to serve resources using https. 

Extension must be built using `npm run build`, packaged `npm run package`, published to https://marketplace.visualstudio.com/manage/publishers/ a installed to A. Next development can happen on local development app with support of HMR.

https://stackoverflow.com/questions/39201829/how-to-debug-vsts-extension-build-summary-tab-without-deploying-to-vsts-service

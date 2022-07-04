# SnapShot
Stock Snapshot MERN Application


1. - Seperate routes into controller file

2. - Export default vs Export Const
  * Named Exports - can be imported using import { func } from 'module';
  * can have multiple named exports per file

  * default export - can only have one export per file - can be imported using import MyDefaultComponent from "./MyDefaultExport"; 

3. - import * from file

Import an entire module's contents
This inserts myModule into the current scope, containing all the exports from the module in the file located in /modules/my-module.js.

```
import * as api from '../api'

```
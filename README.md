# AngularFireTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

# このプロジェクトが設定した内容
- `src/environments/environment.ts`, `src/environments/environments.prod.ts`のテンプレートの記述
- `ng add @angular/fire`を実行し関連モジュールをインストール
- `src/app/app.module.ts`にAngularFireModuleを設定 


# Firebaseプロジェクトの設定
- Firebaseで今回のプロジェクトを作成する。
- Database, Storage Hosting, Analyticsなど各ツールを有効にする
- Hostingのページではカスタムドメインがあればテキスレコードを記述する

# Firebaseの設定
![setting of firebase](https://firebasestorage.googleapis.com/v0/b/storage-ui.appspot.com/o/1594254623860?alt=media&token=54b0a85e-5ba0-459d-ba68-4fd4b9c0d2f4)

表示された設定パラメーターを`src/environments/environment.ts`ファイルに貼り付ける

# 手順

```
npm install
firebase login
firebase list // project 一覧を表示
firebase use <project> // 表示されたプロジェクトのうち今回利用するプロジェクトを利用
firebase init
ng deploy
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

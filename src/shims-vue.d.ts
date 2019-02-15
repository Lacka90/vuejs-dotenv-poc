declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '!val-loader!*' {
  const contents: any;
  export = contents;
}

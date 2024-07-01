// import { Html, Head, Main, NextScript } from "next/document";
// import footer from '@components/footer.js';

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//       <footer />
//     </Html>
//   );
// }


import { Html, Head, Main, NextScript } from "next/document";
import Footer from '/components/Footer'; // Correct the import statement

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Footer /> {/* Place Footer component inside the body */}
      </body>
    </Html>
  );
}

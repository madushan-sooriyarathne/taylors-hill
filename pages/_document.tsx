import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MainDocument extends Document {
  // styled component ssr styling
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps: DocumentInitialProps = await Document.getInitialProps(
        ctx
      );
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css"
            rel="stylesheet"
          />

          {/* Manifest */}
          <link rel="manifest" href="manifest.json" />

          {/* Other meta tags */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Taylors Hill" />
          <meta name="apple-mobile-web-app-title" content="Taylors Hill" />
          <meta name="theme-color" content="#d69d19" />
          <meta name="msapplication-navbutton-color" content="#d69d19" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />

          {/* Description meta tag */}
          <meta
            name="Description"
            content="Taylors Hill is a small luxury boutique hotel located in Kandy, 
            Central Hills of Sri Lanka. It's a 200 Years old mansion built by English 
            building architecture and directly involved in Ceylon Tea story. 
            Taylors Hill was used as Gathering house by James Taylors, Father of Ceylon Tea."
          ></meta>

          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/icons/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="192x192"
            href="/static/icons/icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/static/icons/icon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="512x512"
            href="/static/icons/icon-512x512.png"
          ></link>

          {/* Google analytics site-tag */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-175641451-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){
                    dataLayer.push(arguments);
                  }
                  
                  gtag('js', new Date());
                  gtag('config', 'UA-175641451-1');
              `,
            }}
          ></script>

          {/* Added mouseflow analytics */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                  window._mfq = window._mfq || [];
                  (function() {
                    var mf = document.createElement("script");
                    mf.type = "text/javascript"; mf.defer = true;
                    mf.src = "//cdn.mouseflow.com/projects/f3b4fb12-c067-4bae-a3b8-fff9e02862ed.js";
                    document.getElementsByTagName("head")[0].appendChild(mf);
                  })();
            `,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;

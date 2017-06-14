import Document, { Head, Main, NextScript } from 'next/document';
import { flush } from '../theme/styletron';

class CustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styletron = flush();
    const stylesheets = styletron ? styletron.getStylesheets() : [];
    return { ...page, stylesheets };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My Blog | learnnextjs.com Demo</title>
          
          <link
            rel='stylesheet'
            href='/static/vendor/normalize.css/normalize.min.css'
          />

          <link
            rel='stylesheet'
            href='/static/vendor/highlight.js/css/solarized-light.min.css'
          />

          {this.props.stylesheets.map((sheet, i) => (
            <style
              className='_styletron_hydrate_'
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.media || ''}
              key={i}
            />
          ))}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;

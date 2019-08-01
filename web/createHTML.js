"use strict";

const moment = require("moment");

moment.locale("pt-BR");

const renderElements = elements => {
  return elements
    .map((story, i) => {
      switch (story.kind) {
        case "url":
          const cta = story.video ? "Assitir" : "Saiba mais";
          return `<tr data-slot-container="1">
            <td style="padding-right: 20px;" class="hidden-xs">
              <a href="${story.url}?utm_source=newsletter&utm_medium=email" target="_blank" style="text-decoration: none;">
                <img width="182" src="${story.image}" alt="${story.title}" style="border-radius: 4px;" />
              </a>
            </td>
            <td>
              <a href="${story.url}?utm_source=newsletter&utm_medium=email" target="_blank" style="text-decoration: none;">
                <div data-slot="text" style="font-family: 'Proxima Nova','Roboto',Helvetica;font-weight: 600;font-size: 12px;line-height: 13px;color: #858585;text-transform: uppercase;">
                  ${story.author}
                </div>
                <div style="color: #4a4a4a;font-family: 'Proxima Nova','Roboto',Helvetica;font-size: 20px;line-height: 22px;font-weight: 600;padding-bottom: 10px;padding-top: 5px;padding-right: 30px;">
                  ${story.title}
                </div>
                <img class="hidden-lg" width="100%" src="${story.image}" alt="${story.title}" style="margin: 0 0 10px; border-radius: 4px;" />
                <div data-slot="text" style="color: #4A4A4A;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 16px;line-height: 22px;">
                  ${story.content}
                </div>
              </a>
            </td>
            </tr>

            <tr data-slot-container="1">

            <td colspan="2">
              <div data-slot="separator">
                <table width="100%" style="padding: 25px 0;">
                  <tbody>
                    <tr data-section="1">
                      <td style="border-top: 1px solid #E3E3E3;"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>`;
        case "text":
          return `<p class="story-excerpt story-excerpt-link">${story.content}</p>`;
        case "html":
          return `${story.content}`;
        case "heading":
          return `<h3>${story.content}</h3>`;
        case "image":
          return story.url
            ? `<a href="${story.url}"><img class="bodyImage" src="${story.src}" alt="" width="${story.width}" height="${
                story.height
              }"></a>`
            : `<img class="bodyImage" src="${story.src}" alt="" width="${story.width}" height="${story.height}">`;
        default:
          return " ";
      }
    })
    .join(" ");
};

function createHTML(data, cb) {
  const html = `<!DOCTYPE html>
<html>
  <head>
    <title>${data.meta.subject}</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <style type="text/css">
      @media screen {
        @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
      }

      * {
        margin: 0;
        padding: 0;
      }

      img {
        margin: 0;
        padding: 0;
      }

      body {
        -webkit-font-smoothing: antialiased;
        margin: 0;
        padding: 0;
      }

      .image br { display: none; }

      @media only screen and (min-width: 480px) {
        .hidden-lg {
          display: none !important;
        }
      }
      @media only screen and (max-width: 480px) {
        .hidden-xs {
          display: none !important;
        }
      }
    </style>
  </head>
  <body>
    <table width="100%" bgcolor="#F5F5F5">
      <tbody>
        <tr>
          <td style="padding: 30px 5px;">
            <center>
              <table width="100%" style="max-width: 604px;">
                <tbody>

                  <!-- Header -->
                  <span style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">
                    ${data.meta.subject}
                  </span>

                  <tr>
                    <td>
                      <a class="logo" href="https://www.criciuma.dev?utm_source=campaign&utm_medium=email" title="Criciúma Dev">
                        <img src="https://email.criciumadev.com.br/new-newsletter/logo-criciuma-dev.png" alt="Criciúma Dev" height="50" style="display: block;border: none;" />
                      </a>
                    </td>

                    <td align="right">
                      <span style="font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 12px;line-height: 12px;color: #121D3F;text-decoration: none;">
                        ${data.meta.date}
                      </span>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr data-section-wrapper="1">
                    <td colspan="2" style="padding: 30px 0 0;">

                      <table width="100%" bgcolor="#FFFFFF" style="border-bottom: 1px solid #DDDDDD;border-collapse: collapse;">
                        <tbody>
                          <tr>

                            <td colspan="2" style="padding: 38px 21px;">

                              <table width="100%" data-section-wrapper="1">
                                <tbody>
                                  <tr data-slot-container="1">

                                    <td colspan="2" style="padding-bottom: 30px;">
                                      <div data-slot-container="1">

                                        <div data-slot="text" style="font-family: 'Proxima Nova','Roboto',Helvetica;font-weight: 500;font-size: 24px;line-height: 22px;color: #333333;font-weight: 600;">
                                          ${data.meta.header}
                                        </div>

                                        <br>

                                        <div data-slot="text" style="color: #4A4A4A;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 16px;line-height: 22px;">
                                          ${data.meta.preheader}
                                        </div>

                                        <br>

                                        <div data-slot="text" style="color: #4A4A4A;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 16px;line-height: 22px;font-style: italic;">
                                          Colaboraram nesta edição: ${data.meta.indicated}
                                        </div>
                                      </div>
                                    </td>

                                  </tr>

                                  <!-- CONTENT -->
                                  ${renderElements(data.elements)}
                                  <!-- /// -->

                                </tbody>
                              </table>

                              <table width="100%" data-slot-container="1">
                                <tbody>
                                  <tr data-section="1">
                                    <td style="padding: 0 0 0 0;" valign="top" align="center">
                                      <div class="button" data-slot="button" data-param-padding-top="0" data-param-button-size="2" data-param-link-text="Acessar nossos posts" data-param-href="https://medium.com/criciumadev" data-param-float="1" data-param-background-color="#0060f2" data-param-color="ffffff">
                                        <a style="font-family: 'Proxima Nova', 'Roboto', Helvetica;border-radius: 3px;background: #0060f2;height: 50px;line-height: 50px;max-width: 355px;font-weight: 500;font-size: 16px;color: #FFFFFF;text-align: center; display: block;text-decoration: none;text-transform: uppercase;font-weight: 500;" href="https://medium.com/criciumadev?utm_source=newsletter&utm_medium=email">
                                          VEJA ARTIGOS DE NOSSA COMUNIDADE
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding-top: 20px;" align="center" colspan="2">
                      <table width="100%">
                        <tbody>

                          <tr>
                            <td align="center">
                              <div style="color: #757575;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 12px;line-height: 15px;">
                                Essa mensagem foi enviada por Criciúma Dev - Comunidade de desenvolvedores do Sul de Santa Catarina.<br>
                                Você está recebendo este email por ter se cadastrado para recebê-los ou por ter ido a algum <br>
                                de nossos eventos.
                                <br><br>
                                Se deseja não receber mais nossos e-mails,<br class="hidden-lg">
                                <a href="[unsubscribe]" style="color: #4A4A4A;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 12px;line-height: 16px;font-weight: 500;text-decoration: none;">descadastre-se</a> imediatamente.<br>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td align="center" style="padding-top: 25px;">
                              <div style="color: #757575;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 12px;line-height: 15px;padding-bottom: 10px;">NOS SIGA</div>

                              <a href="https://www.instagram.com/criciumadev" style="padding: 0 3px;text-decoration: none;" title="Instagram">
                                <img src="https://email.criciumadev.com.br/new-newsletter/icon-instagram.png?2" alt="Instagram" width="30" style="border: none;" />
                              </a>

                              <a href="https://www.facebook.com/criciumadev" style="padding: 0 3px;text-decoration: none;" title="Facebook">
                                <img src="https://email.criciumadev.com.br/new-newsletter/icon-facebook.png" alt="Facebook" width="30" style="border: none;" />
                              </a>

                              <a href="https://twitter.com/criciumadev" style="padding: 0 3px;text-decoration: none;" title="Twitter">
                                <img src="https://email.criciumadev.com.br/new-newsletter/icon-twitter.png" alt="Twitter" width="30" style="border: none;" />
                              </a>

                              <a href="https://medium.com/criciumadev" style="padding: 0 3px;text-decoration: none;" title="Medium">
                                <img src="https://email.criciumadev.com.br/new-newsletter/icon-medium.png" alt="Medium" width="30" style="border: none;" />
                              </a>

                              <a href="https://www.youtube.com/channel/UC5rQV1_PbC_hYxaiT78lbhg" style="padding: 0 3px;text-decoration: none;" title="Youtube">
                                <img src="https://email.criciumadev.com.br/new-newsletter/icon-youtube.png" alt="Youtube" width="30" style="border: none;" />
                              </a>

                            </td>
                          </tr>

                          <tr>
                            <td align="center" style="padding-top: 30px;">
                              <a href="https://criciumadev.com.br?utm_source=campaign&utm_medium=email" title="Início" style="display:inline-block;margin: 0 8px;text-decoration: none;color: #757575;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 12px;line-height: 15px;">Início</a>
                              <a href="https://medium.com/criciumadev?utm_source=campaign&utm_medium=email" title="Artigos" style="display:inline-block;margin: 0 8px;text-decoration: none;color: #757575;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 12px;line-height: 15px;">Artigos</a>
                              <a href="https://criciumadev.com.br/conference?utm_source=campaign&utm_medium=email" title="Conference" style="display:inline-block;margin: 0 8px;text-decoration: none;color: #757575;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 12px;line-height: 15px;">Conference</a>
                              <a href="https://criciumadev.com.br/sobre?utm_source=campaign&utm_medium=email" title="Sobre" style="display:inline-block;margin: 0 8px;text-decoration: none;color: #757575;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 12px;line-height: 15px;">Sobre</a>
                              <p style="padding-top: 10px;color: #BFBFBF;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 11px;line-height: 13px;">© 2019 Criciúma Dev - Todos os direitos reservados</p>
                            </td>
                          </tr>

                          <tr>
                            <td align="center" style="padding-top: 10px;">
                              <p style="color: #BFBFBF;font-family: 'Proxima Nova', 'Roboto', Helvetica;font-size: 11px;line-height: 16px;">
                                {accountcompany}, {accountaddress1}, {accountcity}, {accountstate} / {accountcountry} | {accountzip}
                              </p>
                            </td>
                          </tr>

                        </tbody>
                      </table>
                    </td>
                  </tr>

                </tbody>
              </table>
            </center>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
  cb(html);
}

module.exports = createHTML;

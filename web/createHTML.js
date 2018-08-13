"use strict";

const moment = require("moment");

moment.locale("pt-BR");

function button({ type = "primary", align = "center", url = "https://criciumadev.com.br/", title = "Clique Aqui" }) {
  return `<table class="btn btn-${type}">
      <tr>
        <td align="${align}">
          <table>
            <tr>
              <td>
                <a href="${url}">${title}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;
}

const renderElements = elements => {
  return elements
    .map((story, i) => {
      switch (story.kind) {
        case "url":
          const cta = story.video ? "Assitir" : "Saiba mais";
          return `<tr>
              <td align="center" valign="top">
                  <table width="580" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" valign="top" style="overflow:hidden!important;border-radius:3px">
                      <tbody>
                          <!-- <tr>
                              <td>
                                  <a href="" target="_blank">
                                      <img src="" width="580" style="border:0;max-width:100%!important">
                                  </a>
                              </td>
                          </tr> -->
                          <tr height="72">
                              <td>&nbsp;</td>
                          </tr>

                          <tr>
                              <td align="center">
                                  <table width="85%">
                                      <tbody>
                                          <tr>
                                              <td align="center">
                                                  <h2>
                                                      <a style="margin:0!important;font-family:'Open Sans',arial,sans-serif!important;font-size:28px!important;line-height:38px!important;font-weight:200!important;color:#252b33!important;text-decoration: none;" href="${story.url}" target="_blank">${story.title}</a>
                                                  </h2>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                          <tr height="25">
                              <td>&nbsp;</td>
                          </tr>

                          <tr>
                              <td align="center">
                                  <table border="0" cellpadding="0" cellspacing="0" width="78%">
                                      <tbody>
                                          <tr>
                                              <td align="center" style="font-family:'Open Sans',arial,sans-serif!important;font-size:16px!important;line-height:30px!important;font-weight:400!important;color:#7e8890!important">
                                                <a style="font-family:'Open Sans',arial,sans-serif!important;font-size:16px!important;line-height:30px!important;font-weight:400!important;color:#7e8890!important; text-decoration: none;" href="${story.url}" target="_blank">
                                                  ${story.content}
                                                  <br>
                                                  <i style="font-size: 13px;">Indicado por ${story.author}.</i>
                                                </a>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                          <tr height="36">
                              <td>&nbsp;</td>
                          </tr>

                          <tr>
                              <td align="center" valign="top">
                                  <table border="0" cellspacing="0" cellpadding="0">
                                      <tbody>
                                          <tr>
                                              <td align="center" valign="top">
                                                  <a href="${story.url}" style="background-color:#1591FF;padding:14px 28px 14px 28px;border-radius:3px;line-height:18px!important;letter-spacing:0.125em;text-transform:uppercase;font-size:13px;font-family:'Open Sans',Arial,sans-serif;font-weight:400;color:#ffffff;text-decoration:none;display:inline-block;line-height:18px!important" target="_blank" >${cta}</a>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>

                          <tr height="72">
                              <td>&nbsp;</td>
                          </tr>
                      </tbody>
                  </table>
              </td>
          </tr>

          <tr height="40">
              <td>&nbsp;</td>
          </tr>`;
        case "text":
          return `<p class="story-excerpt story-excerpt-link">${story.content}</p>`;
        case "html":
          return `${story.content}`;
        case "heading":
          return `<h3>${story.content}</h3>`;
        case "button":
          return button(story);
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
            <style type="text/css">
                * {
                    margin: 0;
                    padding: 0;
                }
            </style>
        </head>
        <body>
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" bgcolor="#eaeced">
                <tbody>
                    <tr height="30">
                    </tr>
                    <tr height="8" style="font-size:0;line-height:0">
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td align="center" valign="top">
                            <table width="600">

                                <tbody>
                                    <tr>
                                        <td align="center">
                                            <table width="570" border="0" cellpadding="0" cellspacing="0" valign="top">
                                                <tbody>
                                                    <tr>

                                                        <td width="50">
                                                            <a href="https://criciumadev.com.br" target="_blank">
                                                                <img src="https://email.criciumadev.com.br/base/logo-criciuma-dev.png?2" height="50" alt="Criciúma Dev" style="border:0">
                                                            </a>
                                                        </td>
                                                        <td style="font-family:'Open Sans',arial,sans-serif!important;font-size:13px!important;line-height:50px!important;font-weight:400!important;color:#7e8890!important;text-transform:uppercase!important" align="right">${moment(data.meta.date, moment.ISO_8601).format("dddd, D [de] MMMM, YYYY")}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>

                                    <tr height="40">
                                        <td>&nbsp;</td>
                                    </tr>

                                    <!-- HEAD -->
                                    <tr>
                                        <td align="center" valign="top">
                                            <table width="580" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" valign="top" style="overflow:hidden!important;border-radius:3px">
                                                <tbody>
                                                    <!-- <tr>
                                                        <td>
                                                            <a href="" target="_blank">
                                                                <img src="" width="580" style="border:0;max-width:100%!important">
                                                            </a>
                                                        </td>
                                                    </tr> -->
                                                    <tr height="40">
                                                        <td>&nbsp;</td>
                                                    </tr>

                                                    <tr>
                                                        <td align="center">
                                                            <table width="90%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center">
                                                                            <h2 style="margin:0!important;font-family:'Open Sans',arial,sans-serif!important;font-size:28px!important;line-height:38px!important;font-weight:200!important;color:#252b33!important">${data.meta.subject}</h2>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr height="25">
                                                        <td>&nbsp;</td>
                                                    </tr>

                                                    <tr>
                                                        <td align="center">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="85%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center" style="font-family:'Open Sans',arial,sans-serif!important;font-size:16px!important;line-height:30px!important;font-weight:400!important;color:#7e8890!important">${data.meta.preheader}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="center" style="font-family:'Open Sans',arial,sans-serif!important;font-size:16px!important;line-height:30px!important;font-weight:400!important;color:#7e8890!important">Sugira conteúdo usando nosso <a style="text-decoration: none;font-family:'Open Sans',arial,sans-serif!important;font-size:16px!important;line-height:30px!important;font-weight:400!important;color:#1591FF!important" href="https://slack.criciumadev.com.br" target="_blank">Slack no channel #newsletter</a> :)</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>

                                                    <tr height="40">
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>

                                    <tr height="40">
                                        <td>&nbsp;</td>
                                    </tr>
                                    <!-- /// -->

                                    <!-- CONTENT -->
                                    ${renderElements(data.elements)}
                                    <!-- /// -->

                                    <tr>
                                        <td align="center">
                                            <table width="580" border="0" cellpadding="0" cellspacing="0">
                                              <tbody>
                                                <tr>
                                                  <td>
                                                    <div style="width:22.37%;float:left;display:inline">
                                                      <table bgcolor="#46a9e3" border="0" cellpadding="0" cellspacing="0" width="100%" height="50" style="border-radius:3px!important">
                                                        <tbody>
                                                          <tr>
                                                            <td align="center" valign="middle">
                                                              <a href="https://twitter.com/criciumadev" target="_blank" style="line-height:50px;display:block;text-decoration:none!important;width:100%">
                                                              <img src="https://email.criciumadev.com.br/base/twitter.png" width="15" height="13" alt="Nos siga no Twitter" class="CToWUd">
                                                              <span style="text-decoration:none"> </span>
                                                              <span style="font-family:'Open Sans',arial,sans-serif!important;font-size:12px!important;color:#fefefe!important;border-radius:3px!important;text-decoration:none!important;font-weight:400!important">Twitter</span>
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                    <div style="width:3.5%;min-height:50px;float:left;display:inline"></div>
                                                    <div style="width:22.37%;float:left;display:inline">
                                                      <table bgcolor="#36549d" border="0" cellpadding="0" cellspacing="0" width="100%" height="50" style="border-radius:3px!important">
                                                        <tbody>
                                                          <tr>
                                                            <td align="center" valign="middle">
                                                              <a href="https://www.facebook.com/criciumadev" style="line-height:50px;display:block;text-decoration:none!important;width:100%" target="_blank">
                                                              <img src="https://email.criciumadev.com.br/base/facebook.png" style="border:0;display:inline-block;vertical-align:middle" width="8" height="15" alt="Facebook">
                                                              <span style="text-decoration:none"> </span>
                                                              <span style="font-family:'Open Sans',arial,sans-serif!important;font-size:12px!important;color:#fefefe!important;border-radius:3px!important;text-decoration:none!important;font-weight:400!important">Facebook</span>
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                    <div style="width:3.5%;min-height:50px;float:left;display:inline"></div>
                                                    <div style="width:22.37%;float:left;display:inline">
                                                      <table bgcolor="#02B875" border="0" cellpadding="0" cellspacing="0" width="100%" height="50" style="border-radius:3px!important">
                                                        <tbody>
                                                          <tr>
                                                            <td align="center" valign="middle">
                                                              <a href="http://slack.criciumadev.com.br" style="line-height:50px;display:block;text-decoration:none!important;width:100%" target="_blank">
                                                              <img src="https://email.criciumadev.com.br/base/slack.png" style="border:0;display:inline-block;vertical-align:middle" width="24" height="24" alt="Nosso Slack">
                                                              <span style="text-decoration:none"> </span>
                                                              <span style="font-family:'Open Sans',arial,sans-serif!important;font-size:12px!important;color:#fefefe!important;border-radius:3px!important;text-decoration:none!important;font-weight:400!important">Nosso Slack</span>
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                    <div style="width:3.5%;min-height:50px;float:left;display:inline"></div>
                                                    <div style="width:22.37%;float:left;display:inline">
                                                      <table bgcolor="#CD201F" border="0" cellpadding="0" cellspacing="0" width="100%" height="50" style="border-radius:3px!important">
                                                        <tbody>
                                                          <tr>
                                                            <td align="center" valign="middle">
                                                              <a href="https://www.youtube.com/channel/UC5rQV1_PbC_hYxaiT78lbhg" style="line-height:50px;display:block;text-decoration:none!important;width:100%" target="_blank">
                                                              <img src="https://email.criciumadev.com.br/base/youtube.png" style="border:0;display:inline-block;vertical-align:middle" width="19" height="14.29" alt="Canal no YouTube">
                                                              <span style="text-decoration:none"> </span>
                                                              <span style="font-family:'Open Sans',arial,sans-serif!important;font-size:12px!important;color:#fefefe!important;border-radius:3px!important;text-decoration:none!important;font-weight:400!important">YouTube</span>
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                        </td>
                                    </tr>

                                    <tr height="58">
                                        <td>&nbsp;</td>
                                    </tr>

                                    <tr>
                                        <td align="center">
                                            <table width="580" border="0" cellpadding="0" cellspacing="0" valign="top">
                                                <tbody>
                                                    <tr>
                                                        <td align="center">
                                                            <a href="{unsubscribe}" style="font-family:Open Sans,sans-serif!important;font-size:12px!important;color:#7e8890!important;text-decoration:underline!important" target="_blank">Descadastrar desta lista de emails</a>
                                                        </td>
                                                    </tr>
                                                    <tr height="21" style="padding:0;margin:0;font-size:0;line-height:0">
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" align="center">
                                                            <p style="margin-bottom:1em;font-family:Open Sans,sans-serif!important;padding:0!important;margin:0!important;color:#7e8890!important;font-size:12px!important;font-weight:300!important"><span><span>{accountcompany}</span>, {accountaddress1}, {accountcity}, {accountstate} / {accountcountry} | {accountzip}</span>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr height="38">
                                                        <td>&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </body>
    </html>`;
  cb(html);
}

module.exports = createHTML;

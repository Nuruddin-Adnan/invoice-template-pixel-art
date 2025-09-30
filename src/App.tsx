import './Invoice.css';

function App() {

  return (
    <div className="app-container">
      {/* Invoice Component */}
      <div className="invoice-container">
        <div className='invoice-page'>
          <div className='invoice-sidebar'>
            <p> &nbsp; &nbsp; <strong>KVK</strong> 55840639  &nbsp; &nbsp; <strong>BTW</strong> NL851880472B02 &nbsp; &nbsp; <strong>ADRES</strong> KEYENBURG 17 - 3085KA ROTTERDAM -
              NEDERLAND</p>
          </div>
          <div className="invoice-content">
            {/* Header */}
            <div className="invoice-header">
              <div className="invoice-header-left">
                <h1 className="invoice-title">
                  <span className="invoice-title-credit">CREDIT</span>
                  <span className="invoice-title-factuur">FACTUUR</span>
                </h1>
                <div className="invoice-date">DATUM - 01-09-2025</div>
              </div>

              <div className="invoice-header-right">
                <div className="invoice-company-logo">
                  <img src="/logo.png" alt="Company Logo" />
                </div>

                <div className="invoice-contact-info">
                  <div className="invoice-contact-item">
                    <span className="invoice-contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                      </svg>
                    </span>
                    <span>info@pixel-art.com</span>
                  </div>
                  <div className="invoice-contact-item">
                    <span className="invoice-contact-icon" style={{ marginRight: "12px" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                      </svg>

                    </span>
                    <span>+1202-555-0163</span>
                  </div>
                  <div className="invoice-contact-item">
                    <span className="invoice-contact-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>www.pixel-art.com</span>
                  </div>
                  <div className='hr-line ml-auto'></div>
                </div>
              </div>
            </div>

            {/* Client and Invoice Details */}
            <div className="invoice-details">
              <div className="invoice-client-info">
                <div className="invoice-client-header">
                  <span className="invoice-label">geadresseerde</span>
                  <h3 className="invoice-client-name">BIOCHECK B.V.</h3>
                  <p className="invoice-label my-1">Ingrid van Luijk</p>
                  <div className="invoice-label flex items-center invoice-client-email">
                    <span className="invoice-email-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                      </svg>
                    </span>
                    <span>administratie@biocheck.nl</span>
                  </div>
                </div>
                <div className="invoice-client-address">
                  <p>Sjanghailaan 275</p>
                  <p>3066 SJ Rotterdam</p>
                  <p>Nederland</p>
                </div>
              </div>

              <div className="invoice-meta-info text-right">
                <div className="invoice-meta-section">
                  <div className="invoice-meta-item">
                    <span className="invoice-meta-label">bank</span>
                    <span className="invoice-meta-value">Revolut Bank UAB Netherlands Branch</span>
                  </div>
                  <div className="invoice-meta-item">
                    <span className="invoice-meta-label">rekeninghouder</span>
                    <span className="invoice-meta-value">PIXELS ART COMPANY</span>
                  </div>
                </div>

                <div className="invoice-meta-section">
                  <div className="invoice-meta-item">
                    <span className="invoice-meta-label">bic</span>
                    <span className="invoice-meta-value">REVONL22</span>
                  </div>
                  <div className="invoice-meta-item">
                    <span className="invoice-meta-label">iban</span>
                    <span className="invoice-meta-value">NL50REVO4201534700</span>
                  </div>
                </div>
                <div className='hr-line ml-auto'></div>

                <div className="invoice-meta-section">
                  <div className="invoice-meta-item">
                    <span className="invoice-meta-label">factuurnummer</span>
                    <span className="invoice-meta-value">INV2025-0185</span>
                  </div>
                  <div className="invoice-meta-item">
                    <span className="invoice-meta-label">klantnummer</span>
                    <span className="invoice-meta-value">C2018-0006</span>
                  </div>
                </div>

                <div className="invoice-meta-section">
                  <div className="invoice-meta-item">
                    <span className="invoice-meta-label">klant referentie</span>
                    <span className="invoice-meta-value">project abbot-x110</span>
                  </div>
                  <div className="invoice-meta-item">
                    <span className="invoice-meta-label">betalingstermijn</span>
                    <span className="invoice-meta-value">14 dagen</span>
                  </div>
                </div>
                <div className='hr-line ml-auto'></div>
              </div>
            </div>

            {/* Thank you message */}
            <div className="invoice-message">
              Dank voor uw interesse in onze diensten. Hieronder vindt u een overzicht van de werkzaamheden en bijbehorende tarieven.
            </div>

            {/* Items Table */}
            <div className="invoice-table">
              <div className="invoice-table-header">
                <div className="invoice-col-product">PRODUCT-/DIENSTEN</div>
                <div className="invoice-col-units">UNITS</div>
                <div className="invoice-col-price">STUKSPRIJS</div>
                <div className="invoice-col-btw">BTW</div>
                <div className="invoice-col-total">TOTAAL</div>
              </div>

              <div className="invoice-table-body">
                <div className="invoice-table-row">
                  <div className="invoice-col-product">
                    <div className="invoice-product-name">Landing Page Design</div>
                    <div className="invoice-product-desc">Lorem ipsum dolore elite adipisicing elite eeds.</div>
                  </div>
                  <div className="invoice-col-units">2<span className="invoice-unit">uur</span></div>
                  <div className="invoice-col-price">$ 700.00</div>
                  <div className="invoice-col-btw">21%</div>
                  <div className="invoice-col-total">€ 5000.00<div className="invoice-discount">- 20%</div></div>
                </div>

                <div className="invoice-table-row">
                  <div className="invoice-col-product">
                    <div className="invoice-product-name">Newsletter Design</div>
                    <div className="invoice-product-desc">Aenean eujusto condimentums these loream.</div>
                  </div>
                  <div className="invoice-col-units">3<span className="invoice-unit">uur</span></div>
                  <div className="invoice-col-price">$ 500.00</div>
                  <div className="invoice-col-btw">21%</div>
                  <div className="invoice-col-total">$ 700.00</div>
                </div>

                <div className="invoice-table-row">
                  <div className="invoice-col-product">
                    <div className="invoice-product-name">Website Design</div>
                    <div className="invoice-product-desc">Euismod tincidunt dolores magna avolutpa.</div>
                  </div>
                  <div className="invoice-col-units">1<span className="invoice-unit">uur</span></div>
                  <div className="invoice-col-price">$ 300.00</div>
                  <div className="invoice-col-btw">21%</div>
                  <div className="invoice-col-total">$ 2000.00</div>
                </div>

                <div className="invoice-table-row">
                  <div className="invoice-col-product">
                    <div className="invoice-product-name">Magazine Design</div>
                    <div className="invoice-product-desc">Lorem ipsum dolors sites adipiscings elite sed.</div>
                  </div>
                  <div className="invoice-col-units">2<span className="invoice-unit">uur</span></div>
                  <div className="invoice-col-price">$ 700.00</div>
                  <div className="invoice-col-btw">21%</div>
                  <div className="invoice-col-total">$ 800.00<div className="invoice-discount">- 20%</div></div>
                </div>

                <div className="invoice-table-row">
                  <div className="invoice-col-product">
                    <div className="invoice-product-name">Corporate logo Design</div>
                    <div className="invoice-product-desc">Aenean eujusto condimentum theses loream.</div>
                  </div>
                  <div className="invoice-col-units">1<span className="invoice-unit">uur</span></div>
                  <div className="invoice-col-price">$200.00</div>
                  <div className="invoice-col-btw">21%</div>
                  <div className="invoice-col-total">$1500.00</div>
                </div>

                <div className="invoice-table-row">
                  <div className="invoice-col-product">
                    <div className="invoice-product-name">Proposal Design</div>
                    <div className="invoice-product-desc">Aenean justo condimentums these mates.</div>
                  </div>
                  <div className="invoice-col-units">3<span className="invoice-unit">uur</span></div>
                  <div className="invoice-col-price">$ 150.00</div>
                  <div className="invoice-col-btw">21%</div>
                  <div className="invoice-col-total">$ 1800.00</div>
                </div>
              </div>
            </div>

            {/* Totals */}
            <div className="invoice-totals">
              <div className="invoice-total-row">
                <span className="invoice-total-label">TOTAAL EX. BTW</span>
                <span className="invoice-total-value">$ 15270.00</span>
              </div>
              <div className="invoice-total-row">
                <span className="invoice-total-label">BTW: 21%</span>
                <span className="invoice-total-value">$ 2275.00</span>
              </div>
              <div className="invoice-total-row invoice-discount-row">
                <span className="invoice-total-label">Korting (20%)</span>
                <span className="invoice-total-value">$ 750.00</span>
              </div>
              <div className="invoice-final-total">
                <span className="invoice-final-label">TOTAAL</span>
                <span className="invoice-final-value">$75200.00</span>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="invoice-bottom-message">
              Wij vertrouwen erop dat dit voorstel aansluit bij uw verwachtingen. Mocht u vragen hebben of verdere toelichting wensen, dan staan wij uiteraard voor u klaar. Graag vernemen wij uw akkoord zodat wij de werkzaamheden kunnen inplannen.
            </div>

            {/* Footer */}
            <div className="invoice-footer">
              <h3 className="invoice-footer-title">Bedankt voor uw vertrouwen</h3>
              <p className="invoice-footer-text">
                Hartelijk dank voor uw vertrouwen in onze dienstverlening. Wij vragen u deze factuur tijdig en volledig te betalen
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
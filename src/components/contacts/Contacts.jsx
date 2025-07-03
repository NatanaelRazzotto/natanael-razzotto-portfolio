
import './contacts.css';
function Contacts(){
    return(
        <>
            <section className="contacts">

                <div className="contacts-info">
                    <div className='header-title'>
                                       <div className="emphasis-title">
                                            <h3>CONTATOS</h3>
                                       </div>
                                  </div>
                      <div className="contact-content">
                         <div className="column left">                
                        <p>Para entrar em contato comigo, você pode optar pelo envio de e-mail. Mas caso opte por telefone, sugiro o contato via WhatsApp. Desde já grato pelo interesse!</p>   
                        <div className="icons">
                            <div className="row">
                        
                                <div className="info">
                                    <div className="head">Nome</div>
                                   <div className="sub-title"> Natanael Orthey Z. Razzotto</div>                                   
                                </div>
                            </div>                                 
                            <div className="row">
                         
                            <div className="info">
                                <div className="head">Celular (WhatsApp)</div>
                                <div className="sub-title">(41) 99238-1469</div> 
                                <div className="whatsapp-btn">
                                <a
                                    href={`https://wa.me/5541992381469?text=Olá! Obrigado por entrar em contado! Vamos conversar!?`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Chamar no WhatsApp
                                </a>
                                </div>
                            </div>
                            </div>

                            <div className="row">
                       
                                <div className="info">
                                    <div className="head">Email</div>
                                        <div className="sub-title">natanaelrazzottodev@gmail.com
                                        </div>                                   
                                </div>                            
                            </div> 
                            <div className="row">
                          
                                <div className="info">
                                    <div className="head">Endereço</div>
                                        <div className="sub-title">Jardim Bela Vista, Piraquara - PR</div>                                   
                                </div>                            
                            </div>                            
                                  </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default Contacts;
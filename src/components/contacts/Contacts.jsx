
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
                                     
                            <p>Para entrar em contato comigo, você pode optar pelo envio de e-mail. Mas caso opte por telefone, sugiro o contato via WhatsApp. Desde já grato pelo interesse!</p>   

                            <h4> Natanael Orthey Z. Razzotto</h4>                                 
      
                            <p>Celular de Contato</p>

                                
                                    <a
                                    className="whatsapp-btn"
                                        href={`https://wa.me/5541992381469?text=Olá! Obrigado por entrar em contado! Vamos conversar!?`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        (41) 99238-1469
                                     </a>
                               
                    
                             <p>Email</p>
                             
                             <h4>natanaelrazzottodev@gmail.com</h4>

                            <p>Endereço</p>

                                <h4>Piraquara - Paraná - Brasil</h4>

                    </div>
                </div>  
            </section>
        </>
    )
}
export default Contacts;
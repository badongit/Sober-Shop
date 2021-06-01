import React from 'react'

export default function Map() {
    return (
        <div className="google-map" style={{height: "100%"}}>
            <iframe 
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7446.976597001269!2d105.7352247741659!3d21.0531509439406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454f9de2328cf%3A0xc5685fbea9808d8e!2zTmd1ecOqbiBYw6EsIE1pbmggS2hhaSwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1622432261854!5m2!1svi!2s" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                aria-hidden="false" 
                tabIndex="0"
            />
        </div>
    )
}

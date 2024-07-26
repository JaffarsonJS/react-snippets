import Image from 'next/image';
import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const Signature = () => {
  const sigCanvas = useRef({});
  const [signatureURL, setSignatureURL] = useState(null);

  const clearSignature = () => {
    sigCanvas.current.clear();
    setSignatureURL(null);
  };

  const saveSignature = () => {
    setSignatureURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
    console.log(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
  };


  return (
    <div>
      <div >
        <div>Signature</div>
      </div>
      <div>
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
        />
        {signatureURL && (
          <div>
            <p>Saved Signature:</p>
            <Image src={signatureURL} alt="Saved Signature" />
          </div>    
        )}
      </div>
      <div>
        <button variant="secondary" onClick={clearSignature}>
          Clear
        </button>
        <button variant="primary" onClick={saveSignature}>
          Save
        </button>
        <button variant="primary">
          Close
        </button>
      </div>
    </div>
  );
};

export default Signature;

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  //Local
  // serverUrl = 'http://localhost/dentist/api/';
  // patient_image = 'http://localhost/dentist/public/images/patient';
  // doctor_image='http://localhost/dentist/public/images/doctor'; 

// online
  serverUrl = 'https://demo.webmediaindia.com/dentist/api/';
  patient_image = 'https://demo.webmediaindia.com/dentist/public/images/patient';
  doctor_image='https://demo.webmediaindia.com/dentist/public/images/doctor'; 
  

  service_detail=[
    {id:1,title:'Implant Therapy',image:'implant_threapy.jpg',description:'Dental implants are often the best treatment for missing teeth. When a damaged or decayed tooth is removed, both the visible part of the tooth, called the crown, and the root are lost. </p><p> A dental implant is placed in the jawbone so that it can fuse with your natural bone and become a strong and sturdy foundation for replacement teeth. Implants can be used to replace an individual tooth or for an implant-supported bridge or denture containing multiple teeth.</p><p>  Dental implants are the closest you can get to healthy, natural teeth. They will allow you to confidently eat, smile, laugh, talk, play and enjoy all of your regular activities of everyday life without thinking about your teeth.</p>'},

    {id:2,title:'Root Canal',image:'root_canal.jpg',description:'Root canal is a treatment to repair and save a badly damaged or infected tooth instead of removing it. The procedure involves removing the damaged area of the tooth (the pulp) and cleaning and disinfecting it, then filling and sealing it. The common causes affecting the pulp are a cracked tooth, a deep cavity, repeated dental treatment to the tooth or trauma to it. The term "root canal" comes from cleaning of the canals inside the tooths root. Decades ago, root canal treatments were painful. With dental advances and local anesthetics, most people have little if any pain with a root canal today.  </p><p>  The pulp is the soft tissue that contains nerves, blood vessels and connective tissue. It lies within the tooth and extends from the crown of the tooth to the tip of the root in the bone of the jaw.  </p><p>  When the pulp is diseased or injured and cannot repair itself, it dies. The most common cause of pulp death is a cracked tooth or a deep cavity. Both of these problems can let bacteria enter the pulp, causing an infection inside the tooth.</p>'},
   
    {id:3,title: 'Crown & Bridges',image: 'crown_bridges.jpg',description: 'Both crowns and most bridges are fixed prosthetic devices. Unlike removable devices such as dentures, which you can take out and clean daily, crowns and bridges are cemented onto existing teeth or implants, and can only be removed by a dentist.</p><p>    A crown is used to entirely cover or "cap" a damaged tooth. Besides strengthening a damaged tooth, a crown can be used to improve its appearance, shape or alignment. A crown can also be placed on top of an implant to provide a tooth-like shape and structure for function. Porcelain or ceramic crowns can be matched to the color of your natural teeth. Other materials include gold and metal alloys, acrylic and ceramic. These alloys are generally stronger than porcelain and may be recommended for back teeth. Porcelain bonded to a metal shell is often used because it is both strong and attractive.</p>'},
   
    {id:4,title: 'Scalling & Polishing',image:'scaling_polishing.jpg',description: 'Scaling removes plaque and tartar and polishing removes stains and remaining plaque while smoothening and shining teeth so that dental plaque cannot attach easily to tooth surfaces.  </p><p>  Polishing may then be followed by a fluoride gel or foam treatment to reduce post-scaling sensitivity and reduce the risk of tooth decay. </p><p>   Dental scaling and polishing is recommended to prevent tooth decay and gum disease, and may be necessary every six months depending on the oral condition of a patient. As infections and diseases can spread from the mouth to the rest of the body, affecting general systemic health, it is important to maintain good oral health and hygiene.</p>'},
    
    {id:5,title: 'Orthodontic Treatment',image:'orthodontic_treatment.jpg',description: 'Orthodontics is the branch of dentistry that corrects teeth and jaws that are positioned improperly. Crooked teeth and teeth that do not fit together correctly are harder to keep clean, are at risk of being lost early due to tooth decay and periodontal disease, and cause extra stress on the chewing muscles that can lead to headaches, TMJ syndrome and neck, shoulder and back pain. Teeth that are crooked or not in the right place can also detract from ones appearance. </p><p>   The benefits of orthodontic treatment include a healthier mouth, a more pleasing appearance, and teeth that are more likely to last a lifetime.  </p><p>  Many different types of appliances, both fixed and removable, are used to help move teeth, retrain muscles and affect the growth of the jaws. These appliances work by placing gentle pressure on the teeth and jaws. The severity of your problem will determine which orthodontic approach is likely to be the most effective.</p>'}  
  ];
  constructor(
    private storage: Storage,
  ) { 
  }
  
  ngOnInit() {
    console.log('service load')
  }
}



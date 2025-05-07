import React from 'react';

function Emergency() {
  const contacts = [
    { name: 'Ambulance', number: '108' },
    { name: 'Police', number: '100' },
    { name: 'Vaidyakiya Helpline', number: '1800-123-456' },
    { name: 'Nearest Govt Hospital', number: '0832-2456789' },
  ];

  return (

    <div className="homepage"> <nav className="navbar"> <div style={styles.imageContainer}> <img 
    src="/vaid_service.jpeg" 
    alt="Vaid Service" 
    style={styles.image}
  /> </div> <div className="nav-links"> 
 <a href="dashboardP">Back</a><br/> 
<a className="link" href="/homePage">Home</a>
<a href="loginPage">Logout</a><br/>

</div>
</nav>
    <div className="max-w-xl mx-auto bg-red-50 border-l-4 border-red-600 p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Emergency Contacts</h2>
      <p className="mb-4 text-gray-700">
        In case of any medical emergency, please use the following contact numbers immediately:
      </p>

      <ul className="space-y-3">
        {contacts.map((contact, idx) => (
          <li key={idx} className="flex justify-between bg-white p-3 rounded border">
            <span className="font-semibold">{contact.name}</span>
            <a href={`tel:${contact.number}`} className="text-blue-600 underline">
              {contact.number}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-gray-500">
        If you need further help, contact our 24x7 support: <strong>1800-999-999</strong>
      </p>
    </div></div>
  );
}

export default Emergency;

const styles = {
  image: {
  maxWidth: "800px",
  height: "60px",
  borderRadius: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  }; 
  

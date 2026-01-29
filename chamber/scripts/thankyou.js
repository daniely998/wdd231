const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results'). innerHTML = `
<p>Application for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Email Address: ${myInfo.get('email')}</p>
<p>Phone Number: ${myInfo.get('phone')}</p>
<p>Organization Name: ${myInfo.get('org-name')}</p>
<p>Date: ${myInfo.get('timestamp')}</p>
`;
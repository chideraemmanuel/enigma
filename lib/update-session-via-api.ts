const updateSessionViaAPI = async () => {
  const response = await fetch('http://localhost:3000/api/session', {
    method: 'PUT',
    credentials: 'include',
  });

  if (!response.ok) {
    console.log('session update via api failed');
  }

  const result = await response.json();

  return result;
};

export default updateSessionViaAPI;

export const getJSON = async function (url) {
  try {
    const responce = await fetch(url);
    if (!responce.ok) throw Error('🚨 problem in fetch api');
    const jsonData = await responce.json();
    return jsonData;
  } catch (err) {
    throw err;
  }
};

export const chekRealData = function (data) {
  return data === 'N/A' ? 'NOT REGISTERED' : data;
};

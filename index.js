const SHEET_ID = '18rPbVPiJPn5QruxTrMBo5YzNWNnRVrv8x5Fm0gA1bN0';
const SHEET_TITLE = 'rumah-jasa';
const SHEET_RANGE = 'B2:D27';

const FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
  .then(res => res.text())
  .then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));
    console.log(data);
  })
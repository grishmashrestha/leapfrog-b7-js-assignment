var trainees = [
      {         
        name:'Rajan Shrestha',
        college:'Kathmandu Engineering College',
        course:'Computer Engineering',
        roll:3
      },
      {
        name:'Sanjay Maharjan',
        college:'KEC',
        course:'Computer Engineeing',
        roll:8
      },
      {
        name:'Prayas Neupane',
        college:'Pulchowk Campus',
        course:'Computer Engineeing',
        roll:12
      },
      {
        name:'Santosh Pandey',
        college:'IOE Pulchowk Campus',
        course: 'Computer Engineeing',
        roll:'5'
      },
      {
        name:'Gaurav KC',
        college:'Kathmandu Engineering College, Kalimati',
        course:'Computer Engineeing',
        roll:'21'
      },
      {
        name:'Madan Dhungana',
        college:'ACEM',
        course:'Computer Engineeing',
        roll:'2'
      },
      {
        name:'Bishal Shrestha',
        college:'Apex',
        course:'Computer Information Systems',
        roll: 1
      },
      {
        name:'Achyut Pokhrel',
        college:'St.Xavier\'s College',
        course:'BSc CSIT',
        roll: 20
      },
      {
        name: 'Romit Amgai',
        college: 'ACEM',
        course: 'Computer Engineering',
        roll: 13
      },
      {
        name: 'Pratish Bahadur Shrestha',
        college: 'ACEM',
        course: 'Computer Engineering',
        roll: 24
      },
      {
        name: 'Binod Kumar Shrestha',
        college: 'Pulchowk campus',
        course: 'Computer Engineering',
        roll: 17
      },
      {
        name:'Bishal Shrestha',
        college:'ACEM',
        course:'Computer Engineeing',
        roll:16
      },
      {
        name: 'kamal Bahadur Rana',
        college: 'pulchowk campus',
        course: 'Electronics Engineering',
        roll: 18
      },
      {
        name:'Kiran Sharma',
        college:'Prime College',
        course:'BSc.CSIT',
        roll:23
      },
      {
        name:'Sampresh Shrestha',
        college:'Kantipur',
        course:'Computer Engineeing',
        roll:15
      },
      {
        name:'Kiran Pariyar',
        college:'ACEM',
        course:'Computer Engineeing',
        roll:14
      },
      {
        name:'Ruban Dangol',
        college:'Islington College',
        course:'BSc Hons in Computing',
        roll:19
      },
      {
        name:'Sujan Vaidya',
        college:'Texas College',
        course:'CSIT',
        roll:4
      },
      {
        name:'Saurav Lal Karn',
        college:'Pulchowk Campus',
        course:'Computer Engineering',
        roll:11
      },
      {
        name:'Bibek Shah',
        college:'Pulchowk Campus',
        course:'Electronics Engineering',
        roll:6
      },
      {
        name:'Laxman khanal',
        college:'ACEM',
        course:'Computer Engineering',
        roll:9
      },
      {
        name:'Prajjwal Raj Kandel',
        college:'Pulchowk Campus',
        course:'Electronics Engineering',
        roll:22 
      },
      {
        name:'Saroj Bhandari',
        college:'Pulchowk Campus',
        course:'Computer Engineering',
        roll:10
      },
      {
        name: 'Grishma Shrestha',
        college: 'Kathmandu Engineering College',
        course: 'Computer Engineering',
        roll: 7
      }];


trainees.sort(function(a,b){
	return parseInt(a.roll) - parseInt(b.roll);
});

var table = document.createElement("table");
var tr = document.createElement("tr");


for(var key in trainees[0]){
	var th = document.createElement("th");	
	th.innerHTML = key+"";
	console.log(key)
	th.style.border = "1px solid black";
	tr.appendChild(th);
}
table.appendChild(tr);

for(var traineeIndex in trainees){
	var tr = document.createElement("tr");
	var trainee = trainees[traineeIndex];
	
  for(var property in trainee){
		var td = document.createElement("td");
		td.innerHTML = trainee[property];
		td.style.border = "1px solid black"
		tr.appendChild(td);
	}
	table.appendChild(tr);
}

document.body.appendChild(table);


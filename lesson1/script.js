const listStudent = [
    {
        id: 1, 
        name: 'Nguyen van A',
        gender: 'nam',
        math_score: 10,
        english_score: 10,
        literature_score: 10,
    },
    {
        id: 2,
        name: 'Tran thi b',
        gender: 'nu',
        math_score: 9,
        english_score: 7,
        literature_score: 4,
    },
];

const renderListStudents = () =>{
    let stringHTML = '';
    for(let student of listStudent){
    stringHTML += `
    <tr>
		<th scope="row">${student.id}</th>
		<td>${student.name}</td>
        <td>${student.gender}</td>
		<td>${student.math_score}</td>
		<td>${student.english_score}</td>
		<td>${student.literature_score}</td>
	    <td>${(student.math_score + student.english_score + student.literature_score) / 3}</td>
        <td>
            <button type="submit" class="btn btn-primary" onclick = "UpdateStudent(${student.id})">Update</button>
            <button type="submit" class="btn btn-primary" onclick = "deleteStudent(${student.id})">Delete</button>
        </td>
	</tr>
    `;
    }
    document.getElementById('show').innerHTML = stringHTML;
}

document.getElementById('btn-create').addEventListener('click', ()=> {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const math_score = document.getElementById('math-score').value;
    const english_score = document.getElementById('english-score').value;
    const literature_score = document.getElementById('literature-score').value;
    //validate 
    if(name.length < 3 || math_score < 0 || math_score > 10 || english_score < 0 || english_score > 10 || literature_score < 0 || literature_score > 10){
        console.log('chua dung dinh dang');
        return false;
    }
    const newStudent = {
        id: Number(id), 
        name, 
        gender, 
        math_score: Number(math_score),
        english_score: Number(english_score),
        literature_score: Number(literature_score),
    };
    listStudent.push(newStudent);
    renderListStudents();
})
const deleteStudent = (id) => {
    const index = listStudent.findIndex(student => student.id === id);
    listStudent.splice(index, 1);
    renderListStudents();
}

const UpdateStudent = (id) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    const index = listStudent.findIndex(student => student.id === id);

    const{id: id_update, name, gender, math_score, english_score, literature_score} = listStudent[index];
    document.getElementById('id').value = id_update;
    document.getElementById('id').disabled = 'true';
    document.getElementById('name').value = name;
    document.getElementById('gender').value = gender;
    document.getElementById('math-score').value = math_score;
    document.getElementById('english-score').value = english_score;
    document.getElementById('literature-score').value = literature_score;

    document.getElementById('btn-create').style.display = 'none';

    document.getElementById('btn-update').style.display = 'inline';
}

document.getElementById('btn-update').addEventListener('click', () => {
    const id = Number(document.getElementById('id').value);
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const math_score = Number(document.getElementById('math-score').value);
    const english_score = Number(document.getElementById('english-score').value);
    const literature_score = Number(document.getElementById('literature-score').value);

    const index = listStudent.findIndex(student => student.id === id);

    listStudent[index].id = id;
    listStudent[index].name = name;
    listStudent[index].gender = gender;
    listStudent[index].math_score = math_score;
    listStudent[index].english_score = english_score;
    listStudent[index].literature_score = literature_score;

    renderListStudents();

    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('math-score').value = '';
    document.getElementById('english-score').value = '';
    document.getElementById('literature-score').value = '';

    document.getElementById('btn-update').style.display = 'none';

    document.getElementById('btn-create').style.display = 'inline';
})

renderListStudents();
window.deleteStudent = deleteStudent;
window.UpdateStudent = UpdateStudent;
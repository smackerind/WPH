"use strict";

// Class todo
class Todo {
    static counter = 0;
    static generateId(){
        Todo.counter += 1;
        return Todo.counter;
    }

    constructor(title, completed = false){
        this.id =Todo.generateId();
        this.title = title;
        this.completed = completed;
    }
    
    // menandai selesai atau belum bentuk (toggle)
    toggle(){
        this.completed = !this.completed;
    }
}

// Class Todolist dari banyak task
class Todolist {
    // array temporary storage = [] 
    items = [];

    // tambah task baru dan validasi 
    add(title){
        const bersih = String(title ?? "").trim();
        if (bersih === ""){
            throw new Error("Form task tidak boleh kosong, harap di isi.");
            }
        const todo = new Todo(bersih);
        this.items.push(todo);
        return todo;
    }

    // delete task berdasarkan id yang di klik
    remove(id){
        const index = this.items.findIndex((t) => t.id === id);
        if (index === -1){
            throw new Error("Task/Tugas tidak diketemukan, periksa kembali.");
            }
        this.items.splice(index,1);
    }

    // penandai apakah selesai / belum
    toggle(id){
        const todo = this.items.find((t) => t.id === id);
        if (!todo){
            throw new Error("Task/Tugas tidak diketemukan, periksa kembali.");
        }
        todo.toggle();
    }

    getall(){
        return [...this.items];
    }

    get length(){
        return this.items.length;
    }

    get completedCount(){
        return this.items.filter((t) => t.completed).length;
    }
 }


// Ambil elemen DOM
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const listEl= document.getElementById("todo-list");
const messageEl = document.getElementById("message");
const counterEL = document.getElementById("counter");

const todolist = new Todolist();
 
function showMessage(teks, tipe = ""){
    messageEl.textContent = teks;
    messageEl.className = "message" + (tipe ? " message--" + tipe : "");
}

function updateCounter() {
    counterEL.textContent = "Total Task: " + todolist.length + "\u2022 Selesai: " + todolist.completedCount;
}

function render(){
    listEl.innerHTML = "";
    const todos = todolist.getall();

    // Pembuatan kerangka list task yang kosong jika tidak ada task yang di tambahkan
    if (todos.length === 0){
        const kosong = document.createElement("li");
        kosong.className = "list__empty";
        kosong.textContent = "Belum ada Task. Silahkan Tambahkan Task Pertamamu !";
        listEl.appendChild(kosong);
        updateCounter();
        return;
    }

    // pembuatan <li> setiap baris
    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.className = "item" + (todo.completed ? " item--done" : "");

        // checkerbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "item__check";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => {
            try {
                todolist.toggle(todo.id);
                render();
            } catch(err){
                showMessage(err.message, "ERROR");
            }
        });

        // Isi task yang tampilkan
        const title = document.createElement("span");
        title.className = "item__title";
        title.textContent = todo.title;

        // Tombol delete
        const hapus = document.createElement("button");
        hapus.type = "button";
        hapus.className = "item__delete";
        hapus.textContent = "Delete";
        hapus.addEventListener("click", () => {
            try {
                todolist.remove(todo.id);
                render();
            } catch (err){
                showMessage(err.message, "ERROR");
            }
        });

    li.append(checkbox, title, hapus);
    listEl.appendChild(li);

    });

    updateCounter();
}

// Memuat data awal via fetch
async function loadInitialTodos() {
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=0"
    const res =await fetch(url);
    if (!res.ok){
        throw new Error("HTTP "+ res.status);
    }
    const data = await res.json();
    data.forEach((item) =>{
        const todo = todolist.add(item.title);
        if (item.completed){
            todo.toggle();
        }
    });
}

// tambah task without reload lagi
form.addEventListener("submit", (e) => {
    e.preventDefault();
    try{
        todolist.add(input.value);
        input.value = "";
        showMessage("");
        render();
    } catch (err){
        showMessage(err.message,"ERROR");
    }
});

// inisialisasi pada aplikasi
(async function init() {
    showMessage("Memuat data awal...", "loading");
    try {
        await loadInitialTodos();
        showMessage("");
    } catch (err) {
        showMessage("Fail loading data awal (" + err.message+ "). silahkan anda memnambahhkan task manual.", "ERROR");
    }
    render();
}) ();



let form = document.getElementById('login');
let logout = document.getElementById('logout');

form.addEventListener('submit', e => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    let promise = auth.signInWithEmailAndPassword(email, password)
    
    promise
    .then(e => {
        console.log('done')
    })
    .catch(function(err) {
        window.alert(err.message)
    })
})

async function waitForMe() {
    try {
        await auth.signInWithEmailAndPassword(email, password)
        console.log('done')
    } catch {
        
    }
}

auth.onAuthStateChanged(user => {
    if (!user) return window.alert('Not logged in')

    window.alert('logged in')
})

logout.addEventListener('click', e => {
    auth.signOut()
    .then(a => {
        console.log('sign out')
    })
})
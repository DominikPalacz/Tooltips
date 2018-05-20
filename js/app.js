document.addEventListener("DOMContentLoaded", function () {
    //console.log('DOM ok');

    var all = document.querySelectorAll('.tooltip');  // console.log(all);
    var all0 = all[0];  // console.log(all0);
    var all1 = all[1];  // console.log(all1);
    var all2 = all[2];  // console.log(all2);
    /*for(var i =0;i<all.length;i++){
        console.log(all[i]);
    }*/

    all0.addEventListener('mouseover', function () {  // console.log(this.dataset.text);
        var tol0 = document.createElement('span');  // console.log(tol0);
        //console.warn(this)
        tol0.classList.add('tooltipText');
        tol0.innerText = 'Text tooltipa';
        all0.appendChild(tol0);
    });
    all0.addEventListener('mouseout', function () {  // console.log('mouseout');
        var toDel = document.querySelector('.tooltipText');
        toDel.parentElement.removeChild(toDel);
    });

    all1.addEventListener('mouseover', function () {  // console.log(this.dataset.text);
        var tol1 = document.createElement('span');  // console.log(tol1);
        //console.warn(this)
        tol1.classList.add('tooltipText');
        tol1.innerText = 'Text tooltipa';
        all1.appendChild(tol1);
    });
    all1.addEventListener('mouseout', function () {  // console.log('mouseout');
        var toDel = document.querySelector('.tooltipText');
        toDel.parentElement.removeChild(toDel);
    });

    all2.addEventListener('mouseover', function () {  // console.log(this.dataset.text);
        var tol2 = document.createElement('span');  // console.log(tol2);
        //console.warn(this)
        tol2.classList.add('tooltipText');
        tol2.innerText = 'Text tooltipa';
        all2.appendChild(tol2);
    });
    all2.addEventListener('mouseout', function () {  // console.log('mouseout');
        var toDel = document.querySelector('.tooltipText');
        toDel.parentElement.removeChild(toDel);
    });

    /*
     <span class="tooltipText">Text tooltipa</span>
     */

});

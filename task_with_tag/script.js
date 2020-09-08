$(document).ready(function() {
    let q1 = $('#s1').text();
    let q2 = $('.s2').text();
    let q3 = $('#second i').text();
    let q4 = $('q[title="hello"]').text();
    let q5 = $('[href][target="_blank"]').text();
    let q6 = $('.extra:eq(1)').text();
    let content = q1+q2+q3+q4+q5+q6;
    alert(content);
})
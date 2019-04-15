window.onload = function () {
    var bol3 = false;
    var bol4 = true;


    openBanner = function () {

        document.getElementById('bgAni').style.display = "block";
        document.getElementById('bannerImg').style.display = "none";
        bol3 = true;
    }
    divClick = function () {
        window.location.href = 'https://www.primevideo.com/region/eu/detail/amzn1.dv.gti.fcb31fec-3f9b-05a4-827b-52a62512456f/ref_=dvm_atl_gen_in_pl_s_MOBCO_UTURN_MobileInnovation?sr=1-3&qid=1495104219';
    }
    function handleOrientation(event) {
        var x = event.beta;  // In degree in the range [-180,180], x, 'front to back'
        var y = event.gamma; // In degree in the range [-90,90], y, 'left to right'
        var z = event.alpha; // 0-360, z, compass orientation

        var rad = Math.atan2(y, x);
        var deg = rad * (180 / Math.PI);

        // take into account if phone is held sideways / in landscape mode
        var screenOrientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
        // 90, -90, or 0
        var angle = screenOrientation.angle || window.orientation || 0;
        deg = deg + angle;
        if (deg > 30 && bol3 && bol4) {
            bol4 = false;
            document.getElementById('bannerBody').style.backgroundImage = "url('')";
            document.getElementById('bgAni').style.display = 'none';
            document.getElementById('bgAniUTurn').style.display = 'block';
        }
    }

    window.addEventListener('deviceorientation', handleOrientation);
    document.onclick = function () {
        var newDiv = document.createElement('div');

        newDiv.onclick = function () { };
        document.body.appendChild(newDiv);
    }
}
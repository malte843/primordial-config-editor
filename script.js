function download(filename, text) {
    const element = document.createElement('a');
    element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
    element.download = filename;
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function processFiles() {
    const fileInput1 = document.getElementById('fileInput1');
    const fileInput2 = document.getElementById('fileInput2');

    const reader1 = new FileReader();
    const reader2 = new FileReader();

    reader1.onload = function () {
        const data1 = reader1.result;
        const config1 = JSON.parse(atob(data1));

        reader2.onload = function () {
            const data2 = reader2.result;
            const config2 = JSON.parse(atob(data2));

            const rage = document.getElementById('selection-rage');
            const legit = document.getElementById('selection-legit');
            const visuals = document.getElementById('selection-visuals');
            const misc = document.getElementById('selection-misc');
            const skins = document.getElementById('selection-skins');

            if (!rage.checked && !legit.checked && !visuals.checked && !misc.checked && !skins.checked) {
                console.error('none selected');
                return;
            }

            if (rage.checked)
                config2.ui.main.rage = config1.ui.main.rage;

            if (legit.checked)
                config2.ui.main.legit = config1.ui.main.legit;

            if (visuals.checked)
                config2.ui.main.visuals = config1.ui.main.visuals;

            if (misc.checked)
                config2.ui.main.misc = config1.ui.main.misc;

            if (skins.checked)
                config2.skins = config1.skins;

            console.log('all done');

            download(fileInput2.files[0].name, btoa(JSON.stringify(config2)));
        };

        reader2.readAsText(fileInput2.files[0]);
    };

    reader1.readAsText(fileInput1.files[0]);
}
if (/.*:\/\/twitter\.com\//.test(window.location.href)) {
    $(document).arrive('[aria-label="Fil d\'actualités : Tendance actuellement"]', function (actu) {
        $(actu).remove();
        Arrive.unbindAllArrive();
    });
}

if (/.*:\/\/.*\.youtube\.com\/$/.test(window.location.href)) {
    $(document).ready(()=> {
        $(document).arrive("#primary", () => {
            $("#primary > * > #contents").attr('style', 'display: none')
            $("#primary > * > #header").click(() => $("#primary > * > #contents").attr('style', 'display: block'))
            setTimeout(() => Arrive.unbindAllArrive(), 5000)
        });
    })
}

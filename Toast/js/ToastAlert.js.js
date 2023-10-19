
function ToastAlert(msg, type = 'Success', className) {
    const toastPlacementExample = document.querySelector('.toast-placement-ex');
    let selectedType, selectedPlacement, toastPlacement;
    if (toastPlacement) {
        toastDispose(toastPlacement);
    }
    selectedType = className;
    selectedPlacement = "top-0 end-0";
    toastPlacementExample.classList.add(selectedType);
    toastPlacement = new bootstrap.Toast(toastPlacementExample);
    document.getElementById("toast-body").innerHTML = msg;
    document.getElementById("header-toast").innerHTML = type;
    toastPlacement.show();

}


function toastDispose(toast) {
    if (toast && toast._element !== null) {
        if (toastPlacementExample) {
            toastPlacementExample.classList.remove(selectedType);
            DOMTokenList.prototype.remove.apply(toastPlacementExample.classList, selectedPlacement);
        }
        toast.dispose();
    }
}
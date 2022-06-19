<script>
    import ReportLogo from "./ReportsButton.svelte";
    import { createEventDispatcher } from 'svelte';	
    const dispatch = createEventDispatcher();
	
    let hazards = [ {src: "Hazard", text: "Hazard", icon: "obstacle"}, {src: "Hazard_OnRoad", text: "On Road", icon: "obstacle"}, {src: "Hazard_Weather", text: "Weather", icon: "obstacle"}, {src: "Hazard_Shoulder", text: "Shoulder", icon: "obstacle"}];
    let police = [ {src:"Police", text: "Police", icon: "police"},{src:"Police_Onroad", text: "On Road", icon: "police"}, {src:"Police_Hidden", text:"Hidden", icon: "police"}, {src:"Police_Visible", text: "Visible", icon: "police"}];
    let reports = [ hazards, police ];

    function closeModal() {
        dispatch('close-reports-modal');
    }

</script>

<div class="modal">
    <button class="close-button" on:click={closeModal}>X</button>
    <div>
        <h1 style="margin-bottom: 60px; font-size: 40px">Add report</h1>
        {#each reports as report}
        <div class="row">
            {#each report as reportItem}
            <ReportLogo logo={reportItem.src} text={reportItem.text} iconType={reportItem.icon} on:report-button-click={(e) => dispatch("report-button-click", e.detail)}/>
            {/each}
        </div>
    {/each}
    </div>
</div>

<style>
    .close-button {
        position: absolute;
        right: 40px;
        top: 40px;
        border: none;
        font-size: 32px;
        color: white;
        width: 80px;
        height: 80px;
        background-color: #0041A3;
        border-radius: 50px;
        cursor: pointer;
    }
 .row {
    display: flex;
    padding: 20px;
 }
    .modal {
        text-align: center;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        background-color: white;
    }
</style>
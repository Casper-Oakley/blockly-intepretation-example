import Blockly from 'blockly';

const BLOCKLY_CONFIG = {
    toolbox: document.getElementById("toolbox")
};

function main(): void {
    init();
}


function init(): void {
    console.log("hmm");
    const workspace = Blockly.inject('blocklyDiv', BLOCKLY_CONFIG);

    resizeBlockly(workspace);
}


function resizeBlockly(workspace): void {
    const blocklyDiv = document.getElementById("blocklyDiv");
    const blocklyArea = document.getElementById("blocklyArea");
    const onresize = function() {
        // Compute the absolute coordinates and dimensions of blocklyArea.
        let element = blocklyArea;
        let x = 0;
        let y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = <HTMLElement>element.offsetParent;
        } while (element);

        // Position blocklyDiv over blocklyArea.
        blocklyDiv.style.left = x + 'px';
        blocklyDiv.style.top = y + 'px';

        blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';

        Blockly.svgResize(workspace);
    };
    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(workspace);
}



window.onload = main;

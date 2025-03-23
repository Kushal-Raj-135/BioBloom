// Crop name mapping for local names
const cropNameMap = {
    'rice': 'Rice (Dhan)',
    'wheat': 'Wheat (Gehun)',
    'sugarcane': 'Sugarcane (Ganna)',
    'pulses': 'Pulses (Dal)',
    'cotton': 'Cotton (Kapas)',
    'groundnut': 'Groundnut (Moongfali)',
    'maize': 'Maize (Makka)',
    'sorghum': 'Sorghum (Jowar)',
    'pearl-millet': 'Pearl Millet (Bajra)',
    'chickpea': 'Chickpea (Chana)',
    'mustard': 'Mustard (Sarson)',
    'moong': 'Green Gram (Moong)',
    'soybean': 'Soybean (Soya)',
    'potato': 'Potato (Aloo)',
    'corn': 'Corn (Makka)',
    'alfalfa': 'Alfalfa (Rijka)',
    'legumes': 'Legumes (Faliyan)',
    'jowar': 'Jowar (Sorghum)',
    'cowpea': 'Cowpea (Lobia/Chawli)',
    'mung bean': 'Mung Bean (Moong)',
    'pigeonpea': 'Pigeonpea (Arhar/Tur Dal)',
    'arhar': 'Pigeonpea (Arhar/Tur Dal)',
    'tur': 'Pigeonpea (Arhar/Tur Dal)',
    'lobia': 'Cowpea (Lobia/Chawli)',
    'chawli': 'Cowpea (Lobia/Chawli)',
    'tur dal': 'Pigeonpea (Arhar/Tur Dal)'
};

// Crop rotation database
const cropData = {
    wheat: {
        nextCrops: ["soybean", "corn", "potato"],
        benefits: {
            soybean: "Soybeans fix nitrogen in the soil, which wheat depletes.",
            corn: "Corn has different nutrient needs and pest profiles than wheat.",
            potato: "Potatoes break disease cycles and utilize different soil layers.",
        },
        organicFertilizers: [
            { name: "Compost", description: "Rich in nutrients and improves soil structure." },
            { name: "Green Manure", description: "Plant cover crops like clover to enrich soil." },
            { name: "Bone Meal", description: "High in phosphorus, good for root development." },
        ],
    },
    rice: {
        nextCrops: ["pulses", "wheat", "mustard"],
        benefits: {
            pulses: "Pulses (like moong or urad) fix nitrogen and improve soil fertility after rice.",
            wheat: "Wheat-rice is a traditional rotation in Indo-Gangetic plains, different water requirements help soil recovery.",
            mustard: "Mustard has deep roots that break hardpan and adds organic matter to soil.",
        },
        organicFertilizers: [
            { name: "Jeevamrut", description: "Traditional bio-fertilizer made from cow dung, urine, and local ingredients." },
            { name: "Green Manure", description: "Dhaincha or Sesbania for nitrogen fixation before rice transplanting." },
            { name: "Azolla", description: "Aquatic fern that fixes nitrogen in rice paddies." },
        ],
    },
    corn: {
        nextCrops: ["soybean", "wheat", "alfalfa"],
        benefits: {
            soybean: "Soybeans fix nitrogen depleted by corn.",
            wheat: "Wheat has different root structures and disease profiles.",
            alfalfa: "Deep roots break compaction and fix nitrogen.",
        },
        organicFertilizers: [
            { name: "Composted Manure", description: "High in nitrogen needed for corn growth." },
            { name: "Cover Crops", description: "Plant winter rye to prevent erosion and add organic matter." },
            { name: "Worm Castings", description: "Rich in microbes and nutrients for soil health." },
        ],
    },
    tea: {
        nextCrops: ["legumes", "maize", "potato"],
        benefits: {
            legumes: "Legumes fix nitrogen and improve soil structure.",
            maize: "Maize has different nutrient requirements and helps break pest cycles.",
            potato: "Potatoes utilize different soil layers and break disease cycles.",
        },
        organicFertilizers: [
            { name: "Vermicompost", description: "Rich in nutrients and beneficial microorganisms." },
            { name: "Neem Cake", description: "Natural pest deterrent and soil enricher." },
            { name: "Bone Meal", description: "Provides phosphorus for root development." },
        ],
    },
    sugarcane: {
        nextCrops: ["moong", "chickpea", "potato"],
        benefits: {
            moong: "Short duration crop that fixes nitrogen after sugarcane harvest.",
            chickpea: "Improves soil structure and adds nitrogen for next crop.",
            potato: "Different root system helps break pest cycles and utilize nutrients.",
        },
        organicFertilizers: [
            { name: "Press Mud Compost", description: "Sugarcane industry byproduct rich in nutrients." },
            { name: "Farm Manure", description: "Well-decomposed cow dung manure for sustained nutrition." },
            { name: "Bone Meal", description: "Rich in phosphorus for root development." },
        ],
    },
    pulses: {
        nextCrops: ["rice", "maize", "cotton"],
        benefits: {
            rice: "Rice benefits from nitrogen fixed by pulses.",
            maize: "Maize utilizes residual nitrogen and has different pest profile.",
            cotton: "Cotton benefits from improved soil structure after pulses.",
        },
        organicFertilizers: [
            { name: "Rhizobium Culture", description: "Enhances nitrogen fixation in pulse crops." },
            { name: "Rock Phosphate", description: "Natural source of phosphorus for better nodulation." },
            { name: "Ghanjeevamrut", description: "Solid form of Jeevamrut, rich in beneficial microbes." },
        ],
    },
    cotton: {
        nextCrops: ["chickpea", "wheat", "sorghum"],
        benefits: {
            chickpea: "Winter chickpea fixes nitrogen and uses residual moisture.",
            wheat: "Wheat utilizes different soil layers and breaks disease cycle.",
            sorghum: "Drought-resistant crop that helps manage soil moisture.",
        },
        organicFertilizers: [
            { name: "Neem Oil Cake", description: "Natural pest deterrent and nutrient source." },
            { name: "Composted Manure", description: "Well-rotted manure for slow release of nutrients." },
            { name: "Beejamrut", description: "Traditional seed treatment for better germination." },
        ],
    },
    groundnut: {
        nextCrops: ["jowar", "pearl-millet", "maize"],
        benefits: {
            jowar: "Sorghum/jowar is drought tolerant and uses residual fertility.",
            "pearl-millet": "Bajra/pearl-millet has deep roots and drought tolerance.",
            maize: "Maize benefits from nitrogen fixed by groundnut.",
        },
        organicFertilizers: [
            { name: "Phosphate Rich Organic Manure", description: "Enhances pod development and oil content." },
            { name: "Trichoderma Enriched FYM", description: "Protects from soil-borne diseases." },
            { name: "Karanj Cake", description: "Natural pest repellent and nutrient source." },
        ],
    }
};

// AQI data and recommendations
const aqiRecommendations = {
    good: {
        status: "Good",
        color: "#009966",
        activities: [
            "Ideal time for plowing and tilling to minimize dust",
            "Good conditions for harvesting crops",
            "Excellent time for planting and transplanting",
            "Optimal conditions for spraying organic pesticides",
        ],
    },
    moderate: {
        status: "Moderate",
        color: "#ffde33",
        activities: [
            "Good time for most farming activities",
            "Consider using dust reduction techniques when plowing",
            "Suitable for harvesting and field work",
            "Good conditions for irrigation and fertilization",
        ],
    },
    unhealthySensitive: {
        status: "Unhealthy for Sensitive Groups",
        color: "#ff9933",
        activities: [
            "Limit dust-generating activities like plowing",
            "Consider postponing burning of any agricultural waste",
            "Still suitable for harvesting and low-dust activities",
            "Good time for planning and maintenance work",
        ],
    },
    unhealthy: {
        status: "Unhealthy",
        color: "#cc0033",
        activities: [
            "Avoid plowing, tilling, and other dust-generating activities",
            "Postpone burning of agricultural waste",
            "Consider indoor farming activities and planning",
            "Use respiratory protection if outdoor work is necessary",
        ],
    },
    veryUnhealthy: {
        status: "Very Unhealthy",
        color: "#660099",
        activities: [
            "Avoid all outdoor farming activities if possible",
            "Focus on indoor tasks and planning",
            "Postpone all burning and dust-generating activities",
            "Ensure proper irrigation to prevent dust from dry soil",
        ],
    },
};

// Initialize AQI Chart and Gauge
function initializeAQIChart() {
    const ctx = document.getElementById('aqiComparisonChart').getContext('2d');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Enhanced AQI data with more realistic seasonal variations
    const withoutRotationData = [165, 175, 190, 185, 170, 160, 165, 175, 190, 210, 205, 180];
    const withRotationData = [120, 125, 130, 125, 115, 110, 115, 120, 135, 150, 140, 130];

    const gradientWithout = ctx.createLinearGradient(0, 0, 0, 400);
    gradientWithout.addColorStop(0, 'rgba(255, 192, 203, 0.6)');
    gradientWithout.addColorStop(1, 'rgba(255, 192, 203, 0.1)');

    const gradientWith = ctx.createLinearGradient(0, 0, 0, 400);
    gradientWith.addColorStop(0, 'rgba(173, 216, 230, 0.6)');
    gradientWith.addColorStop(1, 'rgba(173, 216, 230, 0.1)');

    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Without Crop Rotation',
                    data: withoutRotationData,
                    borderColor: 'rgba(255, 182, 193, 1)',
                    backgroundColor: gradientWithout,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgba(255, 182, 193, 1)',
                    pointHoverBackgroundColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 6,
                    borderWidth: 2.5,
                    order: 2
                },
                {
                    label: 'With Crop Rotation',
                    data: withRotationData,
                    borderColor: 'rgba(173, 216, 230, 1)',
                    backgroundColor: gradientWith,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgba(173, 216, 230, 1)',
                    pointHoverBackgroundColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 6,
                    borderWidth: 2.5,
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 20,
                    right: 25,
                    bottom: 0,
                    left: 15
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Annual AQI Levels Comparison',
                    align: 'center',
                    font: {
                        size: 18,
                        weight: '500',
                        family: "'Arial', sans-serif"
                    },
                    padding: {
                        top: 0,
                        bottom: 20
                    },
                    color: '#555'
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    align: 'center',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 15,
                        boxWidth: 8,
                        boxHeight: 8,
                        font: {
                            size: 12,
                            family: "'Arial', sans-serif"
                        },
                        color: '#666'
                    }
                },
                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#666',
                    bodyColor: '#666',
                    bodyFont: {
                        size: 12,
                        family: "'Arial', sans-serif"
                    },
                    borderColor: '#ddd',
                    borderWidth: 1,
                    padding: 8,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y} AQI`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 250,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        drawBorder: false,
                        lineWidth: 1
                    },
                    ticks: {
                        stepSize: 50,
                        font: {
                            size: 11,
                            family: "'Arial', sans-serif"
                        },
                        padding: 8,
                        color: '#999',
                        callback: function(value) {
                            return value + ' AQI';
                        }
                    },
                    border: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            size: 11,
                            family: "'Arial', sans-serif"
                        },
                        padding: 5,
                        color: '#999'
                    },
                    border: {
                        display: false
                    }
                }
            },
            elements: {
                line: {
                    borderCapStyle: 'round',
                    borderJoinStyle: 'round'
                }
            },
            interaction: {
                mode: 'index',
                intersect: false
            }
        }
    });
}

// Initialize AQI Gauge
function initAQIGauge() {
    const gaugeElement = document.getElementById('aqi-gauge');
    if (!gaugeElement) return null;

    return new JustGage({
        id: 'aqi-gauge',
        value: 0,
        min: 0,
        max: 300,
        title: 'Current AQI',
        label: 'AQI Value',
        levelColors: ['#009966', '#ffde33', '#ff9933', '#cc0033', '#660099'],
        customSectors: {
            percents: false,
            ranges: [
                { color: '#009966', lo: 0, hi: 50 },
                { color: '#ffde33', lo: 51, hi: 100 },
                { color: '#ff9933', lo: 101, hi: 150 },
                { color: '#cc0033', lo: 151, hi: 200 },
                { color: '#660099', lo: 201, hi: 300 }
            ]
        },
        counter: true,
        pointer: true,
        pointerOptions: {
            toplength: -15,
            bottomlength: 10,
            bottomwidth: 12,
            color: '#8e8e93',
            stroke: '#ffffff',
            stroke_width: 3,
            stroke_linecap: 'round'
        }
    });
}

// Modified updateAQI function to update both gauge and status
function updateAQI(aqiValue) {
    let category;
    if (aqiValue <= 50) category = 'good';
    else if (aqiValue <= 100) category = 'moderate';
    else if (aqiValue <= 150) category = 'unhealthySensitive';
    else if (aqiValue <= 200) category = 'unhealthy';
    else category = 'veryUnhealthy';

    const recommendations = aqiRecommendations[category];
    
    // Update AQI display if elements exist
    const aqiNumberElement = document.getElementById('aqi-number');
    const aqiStatusElement = document.getElementById('aqi-status');
    const aqiValueElement = document.getElementById('aqi-value');
    const aqiActivitiesElement = document.getElementById('aqi-activities');

    if (aqiNumberElement) {
        aqiNumberElement.textContent = aqiValue;
    }
    
    if (aqiStatusElement) {
        aqiStatusElement.textContent = recommendations.status;
        aqiStatusElement.style.color = recommendations.color;
    }
    
    if (aqiValueElement) {
        aqiValueElement.style.background = recommendations.color;
    }

    // Update gauge if it exists
    if (window.aqiGauge && typeof window.aqiGauge.refresh === 'function') {
        window.aqiGauge.refresh(aqiValue);
    } else if (window.aqiGauge) {
        window.aqiGauge.setValue(aqiValue);
    }

    // Update AQI recommendations if element exists
    if (aqiActivitiesElement) {
        aqiActivitiesElement.innerHTML = recommendations.activities
            .map(activity => `<li>${activity}</li>`)
            .join('');
    }
}

// Groq AI Integration
async function getGroqRecommendations(cropInfo) {
    // Use a constant API key for now - this should be replaced with your actual API key
    const GROQ_API_KEY = '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';
    const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    const prompt = `As an agricultural expert in India, provide a detailed 3-year crop rotation plan for the following farm, using local crop names that farmers will understand. IMPORTANT: Do NOT recommend the same crop as the current crop in the rotation plan. Each year should have a different crop to maintain soil health and prevent pest cycles.

Current Farm Details:
- Current Crop: ${getLocalCropName(cropInfo.previousCrop)}
- Soil Type: ${cropInfo.soilType}
- Region/Climate: ${cropInfo.region}
- Farm Size: ${cropInfo.farmSize} acres

Rules for recommendations:
1. NEVER recommend the current crop (${getLocalCropName(cropInfo.previousCrop)}) in the rotation plan
2. Each year must have a different crop
3. Consider crop families that complement each other
4. Focus on crops that improve soil health after the current crop
5. Consider local market demand and climate suitability

Please provide recommendations using common local names for crops (e.g., use "Arhar/Tur Dal" instead of just "Pigeonpea", "Lobia/Chawli" instead of just "Cowpea") in the following format:

3-YEAR ROTATION PLAN:

Year 1:
[Recommended crop with local name - MUST be different from current crop]
- Benefits: [List specific benefits of this crop]
- Reasoning: [Explain why this crop is recommended after the current crop]
- Soil Impact: [How this crop affects soil health]
- Management Tips: [Key cultivation practices]

Year 2:
[Recommended crop with local name - MUST be different from Year 1 crop]
- Benefits: [List specific benefits of this crop]
- Reasoning: [Explain why this crop follows Year 1's crop]
- Soil Impact: [How this crop affects soil health]
- Management Tips: [Key cultivation practices]

Year 3:
[Recommended crop with local name - MUST be different from Years 1 and 2 crops]
- Benefits: [List specific benefits of this crop]
- Reasoning: [Explain why this crop completes the rotation]
- Soil Impact: [How this crop affects soil health]
- Management Tips: [Key cultivation practices]

ORGANIC FERTILIZER RECOMMENDATIONS:
[List specific organic fertilizers for each crop in the rotation]
[Include application timing and rates]
[Traditional and modern organic alternatives]

Additional Recommendations:
1. Organic Fertilizer Strategy: [Specific recommendations]
2. Soil Health Management: [Detailed practices]
3. Climate-Specific Considerations: [Based on the region]
4. Expected Outcomes: [Benefits of this rotation cycle]`;

    try {
        console.log("Sending request to Groq AI...");
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: "You are an expert agricultural advisor specializing in crop rotation. Focus on sustainable farming methods and consider local climate, soil types, and traditional farming knowledge."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 2000
            })
        });

        console.log("Response status:", response.status);
        const responseText = await response.text();
        console.log("Raw response:", responseText);

        if (!response.ok) {
            throw new Error(`Failed to get AI recommendations: ${response.status} ${responseText}`);
        }

        const data = JSON.parse(responseText);
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            throw new Error('Invalid response format from Groq AI');
        }

        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error getting AI recommendations:', error);
        return `Unable to get AI recommendations at the moment. Please try again later.`;
    }
}

// Helper function to get local crop name
function getLocalCropName(cropName) {
    return cropNameMap[cropName.toLowerCase()] || cropName;
}

// Add download functionality
function downloadResults() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Get the recommendations content
    const recommendationsContent = document.querySelector('.recommendations-content');
    if (!recommendationsContent) return;

    // Set up the PDF styling
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const contentWidth = pageWidth - (2 * margin);
    let yPos = margin;

    // Add decorative header background
    doc.setFillColor(76, 175, 80);
    doc.rect(0, 0, pageWidth, 45, 'F');
    
    // Add subtle pattern to header
    for (let i = 0; i < pageWidth; i += 4) {
        doc.setDrawColor(255, 255, 255, 0.1);
        doc.line(i, 0, i, 45);
    }

    // Add header content
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.text('BioBloom Solutions', margin, 25);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(14);
    doc.text('Crop Rotation Recommendations Report', margin, 38);

    yPos = 65;

    // Add report summary box
    doc.setDrawColor(76, 175, 80);
    doc.setFillColor(242, 247, 242);
    doc.roundedRect(margin, yPos, contentWidth, 60, 3, 3, 'FD');
    
    // Farm Details Header with icon-like bullet
    doc.setTextColor(76, 175, 80);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.circle(margin + 5, yPos + 10, 1.5, 'F');
    doc.text('Farm Details Summary', margin + 12, yPos + 12);

    // Get form data
    const cropName = document.getElementById('previous-crop').value;
    const soilType = document.getElementById('soil-type').value;
    const region = document.getElementById('region').value;
    const farmSize = document.getElementById('farm-size').value;
    const date = new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    // Add farm details in an organized grid
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(11);
    const col1X = margin + 15;
    const col2X = margin + contentWidth/2;
    const detailStyle = {
        label: { font: 'helvetica', style: 'bold', size: 11, color: [90, 90, 90] },
        value: { font: 'helvetica', style: 'normal', size: 11, color: [30, 30, 30] }
    };

    // Helper function for detail rows
    function addDetailRow(label, value, x, y) {
        doc.setFont(detailStyle.label.font, detailStyle.label.style);
        doc.setFontSize(detailStyle.label.size);
        doc.setTextColor(...detailStyle.label.color);
        doc.text(label + ':', x, y);
        
        doc.setFont(detailStyle.value.font, detailStyle.value.style);
        doc.setTextColor(...detailStyle.value.color);
        doc.text(value, x + 45, y);
    }

    // Add details in grid format with local names
    addDetailRow('Current Crop', getLocalCropName(cropName), col1X, yPos + 30);
    addDetailRow('Soil Type', soilType, col1X, yPos + 45);
    addDetailRow('Region', region, col2X, yPos + 30);
    addDetailRow('Farm Size', farmSize + ' acres', col2X, yPos + 45);

    // Add report date
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text(`Report Generated: ${date}`, margin + 15, yPos + 55);

    yPos += 80;

    // Process and format recommendations
    const recommendations = recommendationsContent.innerText;
    const sections = recommendations.split('\n\n');
    
    sections.forEach(section => {
        if (section.trim()) {
            if (yPos > pageHeight - 50) {
                doc.addPage();
                yPos = margin;
            }

            if (section.includes('Year')) {
                // Year headers with enhanced visibility
                doc.setFillColor(76, 175, 80, 0.1);
                doc.rect(margin, yPos - 5, contentWidth, 35, 'F');
                
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(16);
                doc.setTextColor(76, 175, 80);
                
                // Extract year number and crop name
                const lines = section.split('\n');
                const yearLine = lines[0];
                let cropLine = lines.find(line => line.includes('Recommended crop') || line.includes('[Recommended crop'));
                
                // Format year header
                doc.text(yearLine, margin + 10, yPos + 8);
                
                // If there's a crop name, format it with local name
                if (cropLine) {
                    cropLine = cropLine.replace('[Recommended crop name]', '').replace('Recommended crop:', '').trim();
                    if (cropLine) {
                        doc.setFontSize(13);
                        doc.setTextColor(60, 60, 60);
                        doc.text(`Recommended Crop: ${getLocalCropName(cropLine)}`, margin + 10, yPos + 25);
                    }
                }
                
                yPos += 45;
            } else if (section.includes('ORGANIC FERTILIZER')) {
                // Section header with clear title
                yPos += 10;
                doc.setFillColor(242, 247, 242);
                doc.setDrawColor(76, 175, 80);
                doc.roundedRect(margin, yPos, contentWidth, 30, 2, 2, 'FD');
                
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(14);
                doc.setTextColor(76, 175, 80);
                doc.text('Organic Fertilizers (Javik Khad)', margin + 10, yPos + 20);
                yPos += 40;
            } else {
                // Regular content with improved readability
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(11);
                doc.setTextColor(60, 60, 60);
                const lines = doc.splitTextToSize(section, contentWidth - 20);
                
                lines.forEach(line => {
                    if (yPos > pageHeight - 50) {
                        doc.addPage();
                        yPos = margin;
                    }

                    if (line.trim().startsWith('-')) {
                        // Enhanced bullet points
                        doc.setFillColor(76, 175, 80);
                        doc.circle(margin + 5, yPos - 2, 1, 'F');
                        
                        // Replace crop names with local names in bullet points
                        let modifiedLine = line.substring(1).trim();
                        Object.keys(cropNameMap).forEach(crop => {
                            const regex = new RegExp(`\\b${crop}\\b`, 'gi');
                            modifiedLine = modifiedLine.replace(regex, getLocalCropName(crop));
                        });
                        
                        doc.text(modifiedLine, margin + 15, yPos);
                        yPos += 8;
                    } else if (line.trim()) {
                        if (line.includes(':')) {
                            // Style for sub-headers with improved visibility
                            doc.setFont('helvetica', 'bold');
                            doc.setTextColor(76, 175, 80);
                            doc.text(line, margin + 5, yPos);
                            doc.setFont('helvetica', 'normal');
                            doc.setTextColor(60, 60, 60);
                        } else {
                            // Replace crop names in regular text
                            let modifiedLine = line;
                            Object.keys(cropNameMap).forEach(crop => {
                                const regex = new RegExp(`\\b${crop}\\b`, 'gi');
                                modifiedLine = modifiedLine.replace(regex, getLocalCropName(crop));
                            });
                            doc.text(modifiedLine, margin + 5, yPos);
                        }
                        yPos += 8;
                    }
                });
                yPos += 7;
            }
        }
    });

    // Add footer to each page
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        
        // Add footer design
        const footerY = pageHeight - 25;
        
        // Add gradient-like footer
        doc.setFillColor(242, 247, 242);
        doc.rect(0, footerY - 5, pageWidth, 30, 'F');
        
        // Add footer line
        doc.setDrawColor(76, 175, 80);
        doc.setLineWidth(0.5);
        doc.line(margin, footerY, pageWidth - margin, footerY);

        // Footer text
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        
        // Add company name on left
        doc.text('BioBloom Solutions', margin, footerY + 10);
        
        // Add page numbers in center
        const pageText = `Page ${i} of ${pageCount}`;
        const pageTextWidth = doc.getStringUnitWidth(pageText) * 10;
        doc.text(pageText, (pageWidth - pageTextWidth) / 2, footerY + 10);
        
        // Add date on right
        const dateText = `Generated: ${date}`;
        const dateTextWidth = doc.getStringUnitWidth(dateText) * 10;
        doc.text(dateText, pageWidth - margin - dateTextWidth, footerY + 10);
    }
    
    // Save the PDF with formatted name
    const fileName = `BioBloom_Rotation_Plan_${cropName}_${date.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    doc.save(fileName);
}

// Add this function after cropData definition
async function getCropEnvironmentRecommendations(cropName) {
    // Use the same API key
    const GROQ_API_KEY = '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';
    const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

    const prompt = `As an agricultural expert, provide the ideal soil type and climate for growing ${cropName} in India.
Please respond in the following JSON format only:
{
    "soilType": "one of: clay, sandy, loamy, silty, peaty",
    "climate": "one of: tropical, subtropical, temperate, arid, mediterranean",
    "explanation": "Brief explanation of why these conditions are ideal for the crop"
}`;

    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: "You are an expert in Indian agriculture and crop requirements. Provide responses in the exact JSON format requested."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                temperature: 0.3,
                max_tokens: 200
            })
        });

        if (!response.ok) {
            throw new Error('Failed to get environment recommendations');
        }

        const data = await response.json();
        const recommendations = JSON.parse(data.choices[0].message.content);
        return recommendations;
    } catch (error) {
        console.error('Error getting environment recommendations:', error);
        return {
            soilType: 'loamy',
            climate: 'tropical',
            explanation: 'Default recommendation based on general growing conditions in India.'
        };
    }
}

// Modified DOM content loaded handler
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AQI Chart first
    window.aqiChart = initializeAQIChart();
    
    // Initialize AQI Gauge after chart
    window.aqiGauge = initAQIGauge();

    // Initialize with a random AQI value
    const initialAQI = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
    setTimeout(() => {
        updateAQI(initialAQI);
    }, 500);

    // DOM Elements
    const cropForm = document.getElementById('crop-form');
    const previousCropSelect = document.getElementById('previous-crop');
    const soilTypeSelect = document.getElementById('soil-type');
    const regionSelect = document.getElementById('region');
    const resultsContent = document.querySelector('.results-content');
    const resultsPlaceholder = document.querySelector('.results-placeholder');
    const nextCropDiv = document.getElementById('next-crop-recommendation');

    // Auto-fill form based on crop selection
    async function autoFillDetails() {
        const selectedCrop = previousCropSelect.value;
        if (selectedCrop) {
            // Show loading state
            soilTypeSelect.disabled = true;
            regionSelect.disabled = true;
            
            // Add loading indicators
            soilTypeSelect.parentElement.style.position = 'relative';
            regionSelect.parentElement.style.position = 'relative';
            
            const loadingHtml = '<div class="loading-spinner" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%);"><i class="fas fa-spinner fa-spin"></i></div>';
            soilTypeSelect.parentElement.insertAdjacentHTML('beforeend', loadingHtml);
            regionSelect.parentElement.insertAdjacentHTML('beforeend', loadingHtml);

            try {
                const recommendations = await getCropEnvironmentRecommendations(selectedCrop);
                
                // Update the select elements
                soilTypeSelect.value = recommendations.soilType;
                regionSelect.value = recommendations.climate;
                
                // Update helper text with explanation
                soilTypeSelect.nextElementSibling.textContent = recommendations.explanation;
                regionSelect.nextElementSibling.textContent = recommendations.explanation;
                
                // Highlight the changes
                soilTypeSelect.style.backgroundColor = '#f0fff0';
                regionSelect.style.backgroundColor = '#f0fff0';
                setTimeout(() => {
                    soilTypeSelect.style.backgroundColor = '';
                    regionSelect.style.backgroundColor = '';
                }, 1000);
            } catch (error) {
                console.error('Error in autoFillDetails:', error);
                // Fallback to default values
                soilTypeSelect.value = 'loamy';
                regionSelect.value = 'tropical';
            } finally {
                // Remove loading state
                soilTypeSelect.disabled = false;
                regionSelect.disabled = false;
                
                // Remove loading spinners
                const spinners = document.querySelectorAll('.loading-spinner');
                spinners.forEach(spinner => spinner.remove());
            }
        }
    }

    // Update AQI and chart every 30 seconds
    setInterval(() => {
        const randomAQI = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
        updateAQI(randomAQI);
        
        if (window.aqiChart) {
            const withRotationIndex = Math.floor(Math.random() * 12);
            const withoutRotationValue = randomAQI + Math.floor(Math.random() * 30);
            const withRotationValue = randomAQI - Math.floor(Math.random() * 20);
            
            window.aqiChart.data.datasets[0].data[withRotationIndex] = withoutRotationValue;
            window.aqiChart.data.datasets[1].data[withRotationIndex] = withRotationValue;
            window.aqiChart.update();
        }
    }, 30000);

    // Form submission handler
    cropForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log("Form submitted");
        
        const formData = {
            previousCrop: previousCropSelect.value,
            soilType: soilTypeSelect.value,
            region: regionSelect.value,
            farmSize: document.getElementById('farm-size').value
        };

        console.log("Form data:", formData);
        
        // Show loading state
        nextCropDiv.innerHTML = '<div class="loading">Generating recommendations...</div>';
        resultsPlaceholder.style.display = 'none';
        resultsContent.style.display = 'block';

        try {
            const aiRecommendations = await getGroqRecommendations(formData);
            
            // Process the recommendations to replace crop names with local names
            const processedRecommendations = aiRecommendations.split('\n').map(line => {
                // Special handling for year headers
                if (line.includes('Year')) {
                    return line;
                }
                
                // Create a map to track which parts of the string have been replaced
                let replacedParts = new Set();
                
                // Create a single regex pattern for all crop names
                const cropPattern = Object.keys(cropNameMap)
                    .sort((a, b) => b.length - a.length) // Sort by length to match longer names first
                    .map(crop => `\\b${crop}\\b`)
                    .join('|');
                
                // Replace all crop names in one pass
                line = line.replace(new RegExp(cropPattern, 'gi'), (match, offset) => {
                    // If this part of the string has already been replaced, return it unchanged
                    if (replacedParts.has(offset)) {
                        return match;
                    }
                    
                    const localName = cropNameMap[match.toLowerCase()];
                    if (localName) {
                        // Mark this region as replaced
                        replacedParts.add(offset);
                        // Only return the local name if it's not already in the format "Crop (Local)"
                        return line.slice(offset).startsWith(localName) ? match : localName;
                    }
                    return match;
                });
                
                // Format the line based on its type
                if (line.trim().endsWith(':')) {
                    return `<h4 class="section-title">${line}</h4>`;
                } else if (line.startsWith('-')) {
                    return `<p class="bullet-point">${line}</p>`;
                } else if (line.trim() === '') {
                    return '<br>';
                } else {
                    return `<p>${line}</p>`;
                }
            }).join('');
            
            nextCropDiv.innerHTML = `
                <div class="recommendations-section">
                    <h3>Crop Rotation Recommendations</h3>
                    <div class="recommendations-content">
                        ${processedRecommendations}
                    </div>
                </div>
            `;

            const selectedCrop = cropData[formData.previousCrop];
            if (selectedCrop) {
                const fertilizerDiv = document.getElementById('fertilizer-recommendation');
                if (fertilizerDiv) {
                    fertilizerDiv.innerHTML = `
                        <div class="fertilizer-section">
                            <h4>Recommended Organic Fertilizers (Javik Khad)</h4>
                            <ul class="fertilizer-list">
                                ${selectedCrop.organicFertilizers.map(fertilizer => `
                                    <li>
                                        <strong>${fertilizer.name}:</strong> ${fertilizer.description}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `;
                }
            }

        } catch (error) {
            console.error("Error getting recommendations:", error);
            nextCropDiv.innerHTML = `
                <div class="error-message">
                    <p>There was an error generating recommendations. Please try again.</p>
                </div>
            `;
        }
    });

    // Add event listeners
    previousCropSelect.addEventListener('change', autoFillDetails);
}); 
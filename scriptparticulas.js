const text = "REAL OVIEDO";
        const container = document.getElementById('text-container');
        const particleCount = 30;

        function createEffect() {
            container.innerHTML = '';

            let totalPreviousChars = 0;

            text.split('').forEach((char, charIndex) => {
                if (char === ' ') {
                    // Si es un espacio, crea un contenedor de espacio
                    const spaceContainer = document.createElement('div');
                    spaceContainer.classList.add('space-container');
                    container.appendChild(spaceContainer);
                } else {
                    // Si es una letra, crea el contenedor de la letra y las partículas
                    const letterContainer = document.createElement('div');
                    letterContainer.classList.add('letter-container');

                    for (let i = 0; i < particleCount; i++) {
                        const particle = document.createElement('div');
                        particle.classList.add('particle');

                        const startX = (Math.random() - 0.5) * 200;
                        const startY = (Math.random() - 0.5) * 200;
                        const offsetX = (Math.random() - 0.5) * 50;
                        const offsetY = (Math.random() - 0.5) * 50;

                        particle.style.setProperty('--start-x', `${startX}px`);
                        particle.style.setProperty('--start-y', `${startY}px`);
                        particle.style.setProperty('--target-x', '0px');
                        particle.style.setProperty('--target-y', '0px');
                        particle.style.setProperty('--offset-x', `${offsetX}px`);
                        particle.style.setProperty('--offset-y', `${offsetY}px`);

                        // Ajusta el retraso de las partículas
                        particle.style.setProperty('--particle-delay', `${charIndex * 0.2 + i * 0.03}s`);

                        letterContainer.appendChild(particle);
                    }

                    const letter = document.createElement('span');
                    letter.textContent = char;
                    letter.classList.add('letter');

                    // Ajusta el retraso de la letra
                    letter.style.setProperty('--letter-delay', `${charIndex * 0.2 + particleCount * 0.03}s`);

                    letterContainer.appendChild(letter);
                    container.appendChild(letterContainer);
                }
            });
        }

        createEffect();
        setInterval(createEffect, 7000);

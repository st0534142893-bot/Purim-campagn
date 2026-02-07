    :root {
        --primary-gold: #D4AF37;
        --primary-gold-dark: #B8941F;
        --primary-gold-light: #F4D03F;
        --accent-gold: #FFD700;
        --cream: #F5E6D3;
        --cream-light: #FFF8DC;
        --cream-dark: #E8D5B7;
        --brown-dark: #3d2f1f;
        --brown-medium: #8B6F47;
        --brown-light: #A0826D;
        --text: #2a1f15;
        --muted: #8B6F47;
        --success: #10b981;
        --warning: #f59e0b;
        --error: #ef4444;
        --border: rgba(212, 175, 55, 0.3);
        --base-font-size: clamp(18px, 1.2vw, 24px);
        --large-font-size: clamp(24px, 1.8vw, 32px);
        --button-font-size: clamp(16px, 1.1vw, 20px);
        --nav-font-size: clamp(20px, 1.4vw, 26px);
    }

    body {
        font-family: 'Segoe UI', 'David', 'Arial Hebrew', sans-serif;
        background: linear-gradient(135deg, var(--cream) 0%, var(--cream-light) 50%, var(--cream-dark) 100%);
        color: var(--text);
        direction: rtl;
        font-size: var(--base-font-size);
        overflow-x: hidden;
        overflow-y: hidden;
        height: 100vh;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
        touch-action: manipulation;
    }

    /* אפשר בחירת טקסט במקומות נחוצים */
    input, textarea, select, .donor-name, .donor-details {
        -webkit-user-select: text;
        user-select: text;
    }

    .app-container {
        display: flex;
        height: 100vh;
        width: 100%;
    }

    /* תפריט ניווט בצד */
    .sidebar-nav {
        max-width: clamp(260px, 18vw, 320px);
        min-width: 260px;
        background: linear-gradient(180deg, var(--cream) 0%, var(--cream-dark) 100%);
        box-shadow: 4px 0 30px rgba(212, 175, 55, 0.3);
        display: flex;
        flex-direction: column;
        z-index: 100;
        position: relative;
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .logo-container {
        padding: clamp(24px, 2vw, 36px) clamp(20px, 1.5vw, 28px);
        text-align: center;
        border-bottom: 2px solid var(--border);
        background: rgba(255, 255, 255, 0.3);
    }

    .logo-img {
        max-width: 100%;
        height: auto;
        max-height: clamp(100px, 8vw, 140px);
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
        border: 2px solid var(--primary-gold);
        padding: clamp(6px, 0.5vw, 10px);
        background: white;
    }

    .nav-menu {
        flex: 1;
        padding: 20px 0;
        overflow-y: auto;
    }

    .nav-item {
        display: block;
        width: 100%;
        padding: 24px 36px;
        background: transparent;
        border: none;
        border-right: 4px solid transparent;
        color: var(--brown-dark);
        font-size: var(--nav-font-size);
        font-weight: 500;
        text-align: right;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        min-height: 60px;
        display: flex;
        align-items: center;
        -webkit-tap-highlight-color: transparent;
    }

    .nav-item:hover,
    .nav-item:focus {
        background: rgba(212, 175, 55, 0.15);
        border-right-color: var(--primary-gold);
        outline: none;
    }

    .nav-item:focus-visible {
        outline: 3px solid var(--primary-gold);
        outline-offset: -3px;
    }

    .nav-item.active {
        background: linear-gradient(135deg, rgba(245, 230, 211, 0.94) 0%, rgba(255, 248, 220, 0.94) 100%);
        border-right-color: var(--primary-gold);
        font-weight: 600;
        color: var(--brown-dark);
        box-shadow: inset 0 0 20px rgba(212, 175, 55, 0.1);
    }

    .nav-item.active::before {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid var(--primary-gold);
    }

    /* אזור תוכן */
    .content-area {
        flex: 1;
        display: flex; 
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        height: 100%;
    }

    .content-section {
        display: none;
        flex: 1;
        overflow-y: auto;
        padding: clamp(30px, 3vw, 50px);
        position: relative;
        -webkit-overflow-scrolling: touch;
    }

    .content-section.active {
        display: flex;
        flex-direction: column;
    }

    /* דף הבית */
    .home-section {
        position: relative;
        background: linear-gradient(135deg, rgba(245, 230, 211, 0.94) 0%, rgba(255, 248, 220, 0.94) 100%);
        min-height: 100%;
    }

    .home-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('http://i.postimg.cc/ZRMCLxgW/wgw-t-t-dhws.png');
        background-repeat: no-repeat;
        background-size: clamp(780px, 74vw, 1500px) auto;
        background-position: center center;
        opacity: 0.98;
        z-index: 0;
    }
    
    @media (max-width: 768px) {
        .home-section::before {
            background-size: clamp(440px, 88vw, 820px) auto;
            background-position: center center;
        }
    }

    .home-content {
        position: relative;
        z-index: 1;
        text-align: center;
        width: 100%;
        max-width: none;
        margin: 0;
        padding: 520px 40px 60px;
    }

    .home-title {
        font-size: clamp(36px, 4vw, 64px);
        color: var(--brown-dark);
        margin-bottom: clamp(20px, 2vw, 40px);
        text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
        font-weight: 700;
        line-height: 1.2;
    }
    
    @media (max-width: 768px) {
        .home-section::before {
            background-size: clamp(440px, 88vw, 820px) auto;
            background-position: center center;
        }
        .home-content {
            padding: 420px 20px 40px;
        }
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(240px, 1fr));
        gap: 30px;
        margin-top: 50px;
        justify-items: stretch;
    }

    .stats-grid .stat-card:nth-child(4) {
        grid-column: 2 / span 1;
    }

    @media (max-width: 920px) {
        .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }
        .stats-grid .stat-card:nth-child(4) {
            grid-column: auto;
        }
    }

    .home-donor-breakdown {
        margin-top: 60px;
        background: rgba(255, 255, 255, 0.88);
        border: 2px solid var(--primary-gold);
        border-radius: 20px;
        padding: 26px;
        box-shadow: 0 8px 32px rgba(212, 175, 55, 0.25);
        text-align: right;
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        align-self: stretch;
    }

    .home-donor-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
    }

    .home-donor-header h2 {
        margin: 0;
        font-size: 26px;
        color: var(--brown-dark);
    }

    .external-action-card {
        margin-top: 24px;
        border: 2px solid var(--primary-gold);
        border-radius: 20px;
        padding: 24px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
        background: linear-gradient(120deg, rgba(255, 255, 255, 0.95), rgba(244, 220, 160, 0.25));
        box-shadow: 0 18px 40px rgba(212, 175, 55, 0.25);
    }

    .external-action-content {
        flex: 1;
        min-width: 220px;
    }

    .external-action-label {
        display: block;
        font-size: 14px;
        color: var(--muted);
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 8px;
    }

    .external-action-title {
        font-size: 28px;
        color: var(--brown-dark);
        margin-bottom: 6px;
        display: block;
    }

    .external-action-note {
        margin: 0;
        color: var(--brown-medium);
        font-size: 15px;
    }

    .external-action-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 14px 28px;
        border-radius: 999px;
        background: linear-gradient(120deg, var(--primary-gold), var(--primary-gold-dark));
        color: #fff;
        font-weight: 700;
        text-decoration: none;
        box-shadow: 0 14px 32px rgba(212, 175, 55, 0.45);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        min-width: 220px;
    }

    .external-action-button:hover,
    .external-action-button:focus-visible {
        transform: translateY(-2px);
        box-shadow: 0 18px 40px rgba(212, 175, 55, 0.55);
    }

    @media (max-width: 640px) {
        .external-action-card {
            padding: 18px;
        }
        .external-action-title {
            font-size: 24px;
        }
        .external-action-button {
            width: 100%;
        }
    }

    .home-donor-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
        width: 100%;
    }

    .home-donor-export {
        display: flex;
        align-items: center;
    }

    .home-donor-filter-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
        width: 100%;
    }

    .home-donor-filter-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 18px 20px;
        border-radius: 18px;
        border: 1px solid var(--border);
        background: #fff;
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.15);
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        cursor: pointer;
    }

    .home-donor-filter-card.active {
        border-color: var(--primary-gold);
        box-shadow: 0 10px 24px rgba(212, 175, 55, 0.35);
        transform: translateY(-2px);
    }

    .home-donor-filter-card.status-none.active {
        background: rgba(254, 226, 226, 0.9);
    }
    .home-donor-filter-card.status-progress.active {
        background: rgba(254, 243, 199, 0.9);
    }

    .home-donor-filter-card.status-met.active {
        background: rgba(209, 250, 229, 0.9);
    }

    .home-donor-filter-card.status-exceeded.active {
        background: rgba(219, 234, 254, 0.9);
    }

    .home-donor-filter-card-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
        color: var(--brown-dark);
    }

    .home-donor-filter-title {
        font-size: 16px;
        font-weight: 600;
    }

    .home-donor-filter-count {
        font-size: 13px;
        color: var(--muted);
    }

    @media (max-width: 900px) {
        .home-donor-filter-grid {
            grid-template-columns: 1fr;
        }
    }

    .home-donor-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .home-donor-item {
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 18px 20px;
        background: #fff;
        display: flex;
        flex-direction: column;
        gap: 8px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        width: 100%;
    }

    .home-donor-item.highlighted {
        transform: translateY(-2px);
        box-shadow: 0 12px 24px rgba(212, 175, 55, 0.35);
    }

    .home-donor-item strong {
        font-size: 16px;
        color: var(--brown-dark);
    }

    .home-donor-meta {
        font-size: 14px;
        color: var(--brown-medium);
        display: flex;
        gap: 10px;
    }
    .home-donor-status {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 600;
        padding: 4px 10px;
        border-radius: 999px;
        background: rgba(0, 0, 0, 0.08);
        color: var(--brown-dark);
    }

    .home-donor-status-none {
        background: rgba(239, 68, 68, 0.18);
        color: #b91c1c;
    }

    .home-donor-status-met {
        background: rgba(16, 185, 129, 0.18);
        color: #0f766e;
    }

    .home-donor-status-exceeded {
        background: rgba(59, 130, 246, 0.18);
        color: #1d4ed8;
    }

    .home-donor-status-progress {
        background: rgba(245, 158, 11, 0.2);
        color: #b45309;
    }

    .home-donor-item.highlighted.status-none {
        background: rgba(254, 226, 226, 0.95);
        border-color: rgba(239, 68, 68, 0.35);
    }

    .home-donor-item.highlighted.status-met {
        background: rgba(209, 250, 229, 0.95);
        border-color: rgba(16, 185, 129, 0.35);
    }

    .home-donor-item.highlighted.status-exceeded {
        background: rgba(219, 234, 254, 0.95);
        border-color: rgba(59, 130, 246, 0.35);
    }
    .home-donor-item.highlighted.status-progress {
        background: rgba(254, 243, 199, 0.95);
        border-color: rgba(245, 158, 11, 0.35);
    }

    .home-donor-toggle {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
        color: var(--brown-dark);
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 52px;
        height: 28px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .switch-slider {
        position: absolute;
        cursor: pointer;
        inset: 0;
        background-color: #cbd5e1;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 28px;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .switch-slider::before {
        position: absolute;
        content: "";
        height: 22px;
        width: 22px;
        left: 3px;
        bottom: 3px;
        background-color: #ffffff;
        border-radius: 50%;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25),
                    0 1px 2px rgba(0, 0, 0, 0.15);
    }

    .switch input:checked + .switch-slider {
        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1),
                    0 0 0 1px rgba(59, 130, 246, 0.2);
    }

    .switch input:checked + .switch-slider::before {
        transform: translateX(24px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25),
                    0 1px 2px rgba(0, 0, 0, 0.15);
    }
    
    .switch:hover .switch-slider {
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
    }
    
    .switch input:checked:hover + .switch-slider {
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),
                    0 0 0 1px rgba(59, 130, 246, 0.3);
    }
    
    .switch input:focus + .switch-slider {
        outline: 2px solid rgba(59, 130, 246, 0.5);
        outline-offset: 2px;
    }

    .home-donor-toggle.disabled {
        opacity: 0.5;
        pointer-events: none;
    }
    .planning-section {
        background: rgba(255, 255, 255, 0.5);
    }

    .instructions-section {
        background: rgba(255, 255, 255, 0.6);
    }

    .instructions-panel {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.95);
        border: 2px solid var(--primary-gold);
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 8px 32px rgba(212, 175, 55, 0.25);
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .instructions-panel h2 {
        font-size: 28px;
        color: var(--brown-dark);
    }

    .instructions-panel p {
        line-height: 1.8;
        color: var(--brown-medium);
    }

    .instructions-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 18px;
    }

    .instructions-card {
        background: rgba(245, 230, 211, 0.6);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        color: var(--brown-dark);
    }

    .instructions-card h3 {
        margin: 0;
        font-size: 20px;
        color: var(--brown-dark);
    }

    .instructions-card ol,
    .instructions-card ul {
        margin: 0;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .instructions-card li {
        line-height: 1.6;
    }

    .instructions-note {
        background: rgba(16, 185, 129, 0.12);
        border-right: 4px solid var(--success);
        padding: 16px;
        border-radius: 12px;
        color: var(--brown-dark);
        line-height: 1.7;
    }

    /* מענק לחתנים */
    .groom-grant-section {
        background: rgba(255, 255, 255, 0.55);
        padding: 40px 20px 60px;
        justify-content: center;
    }

    .groom-grant-section.active {
        display: flex;
    }

    .groom-grant-panel {
        width: 100%;
        max-width: 1200px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 233, 202, 0.9) 48%, rgba(255, 255, 255, 0.94) 100%);
        border: 2px solid rgba(212, 175, 55, 0.35);
        border-radius: 28px;
        padding: 36px;
        box-shadow: 0 24px 46px rgba(212, 175, 55, 0.28);
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .groom-grant-header {
        display: flex;
        flex-direction: column;
        gap: 12px;
        text-align: right;
    }

    .groom-grant-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: flex-end;
        align-items: center;
    }

    .groom-grant-header h2 {
        margin: 0;
        font-size: 32px;
        color: var(--brown-dark);
    }

    .groom-grant-header p {
        margin: 0;
        font-size: 16px;
        color: var(--brown-medium);
        line-height: 1.7;
    }

    .groom-grant-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        background: rgba(255, 255, 255, 0.82);
        border: 1px solid rgba(212, 175, 55, 0.35);
        border-radius: 20px;
        padding: 20px;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.24);
    }

    .groom-grant-form-fields {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        align-items: center;
    }

    .groom-grant-form-fields input {
        width: 100%;
        padding: 12px 14px;
        border: 1px solid rgba(212, 175, 55, 0.4);
        border-radius: 14px;
        font-size: 15px;
        background: rgba(255, 255, 255, 0.95);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .groom-grant-form-fields input:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.25);
    }

    .groom-grant-hint {
        margin: 0;
        font-size: 14px;
        color: var(--muted);
    }

    .groom-grant-list {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .groom-grant-card {
        background: rgba(255, 255, 255, 0.92);
        border-radius: 24px;
        border: 1px solid rgba(212, 175, 55, 0.35);
        box-shadow: 0 14px 36px rgba(212, 175, 55, 0.22);
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;
    }

    .groom-card-header {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: space-between;
        align-items: center;
    }

    .groom-card-title {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
        min-width: 220px;
    }

    .groom-card-title label {
        font-size: 13px;
        color: var(--muted);
    }

    .groom-card-title input {
        padding: 12px 14px;
        border: 1px solid rgba(212, 175, 55, 0.35);
        border-radius: 14px;
        font-size: 16px;
        background: rgba(255, 255, 255, 0.96);
    }

    .groom-card-title input:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.18);
    }

    .groom-card-actions {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .groom-card-summary {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }

    .groom-summary-manual {
        display: flex;
        flex-direction: column;
        gap: 6px;
        max-width: 320px;
    }

    .groom-summary-manual label {
        font-size: 13px;
        color: var(--muted);
    }

    .groom-summary-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 14px;
    }

    .groom-summary-card {
        background: rgba(255, 255, 255, 0.85);
        border: 1px solid rgba(212, 175, 55, 0.28);
        border-radius: 16px;
        padding: 14px 16px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .groom-summary-label {
        font-size: 13px;
        color: var(--muted);
    }

    .groom-summary-value {
        font-size: 20px;
        font-weight: 700;
        color: var(--brown-dark);
    }

    .groom-total-input {
        width: 100%;
        max-width: 260px;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid rgba(212, 175, 55, 0.35);
        font-size: 15px;
    }

    .groom-total-input:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.18);
    }

    .groom-bonus-status {
        font-size: 14px;
        font-weight: 600;
        padding: 10px 14px;
        border-radius: 12px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }

    .groom-bonus-eligible {
        background: rgba(16, 185, 129, 0.14);
        color: #047857;
        border: 1px solid rgba(16, 185, 129, 0.4);
    }

    .groom-bonus-missing {
        background: rgba(245, 158, 11, 0.16);
        color: #b45309;
        border: 1px solid rgba(245, 158, 11, 0.35);
    }

    .groom-year-form {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 12px;
        align-items: center;
        background: rgba(255, 255, 255, 0.86);
        border: 1px dashed rgba(212, 175, 55, 0.35);
        border-radius: 16px;
        padding: 16px;
    }

    .groom-year-form input {
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid rgba(212, 175, 55, 0.3);
        font-size: 14px;
    }

    .groom-year-form input:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.16);
    }

    .groom-year-table-wrapper {
        overflow-x: auto;
    }

    .groom-year-table {
        width: 100%;
        border-collapse: collapse;
        min-width: 420px;
    }

    .groom-year-table th,
    .groom-year-table td {
        padding: 10px 12px;
        text-align: center;
        border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    }

    .groom-year-table th {
        background: rgba(212, 175, 55, 0.12);
        color: var(--brown-dark);
        font-weight: 600;
        font-size: 14px;
    }

    .groom-year-table td {
        font-size: 14px;
        color: var(--brown-dark);
    }

    .groom-year-table input {
        width: 100%;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid rgba(212, 175, 55, 0.28);
        font-size: 14px;
        background: rgba(255, 255, 255, 0.95);
    }

    .groom-year-table input:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.18);
    }

    .groom-year-empty {
        text-align: center;
        color: var(--muted);
        font-size: 14px;
        padding: 18px 0;
        background: rgba(255, 255, 255, 0.85);
        border-radius: 14px;
        border: 1px dashed rgba(212, 175, 55, 0.3);
    }

    @media (max-width: 720px) {
        .groom-grant-panel {
            padding: 24px 20px;
        }
        .groom-grant-header h2 {
            font-size: 26px;
        }
        .groom-grant-header p {
            font-size: 15px;
        }
        .groom-summary-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        }
        .groom-total-input {
            max-width: none;
        }
        .groom-year-form {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        }
    }


    .breakdown-section {
        background: rgba(255, 255, 255, 0.5);
    }

    .toolkit-tips-manager {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 10px;
    }

    .toolkit-tips-manager h3 {
        margin: 0;
        font-size: 22px;
        color: var(--brown-dark);
    }

    .toolkit-tip-hint {
        margin: 0;
        color: var(--brown-medium);
        line-height: 1.6;
    }

    .toolkit-tip-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .toolkit-tip-form label {
        font-weight: 600;
        color: var(--brown-dark);
    }

    .toolkit-tip-form textarea {
        border: 2px solid var(--border);
        border-radius: 10px;
        padding: 12px 14px;
        min-height: 110px;
        resize: vertical;
        font-size: 15px;
        background: rgba(255, 255, 255, 0.95);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .toolkit-tip-form textarea:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
    }

    .toolkit-tips-actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        flex-wrap: wrap;
    }

    .toolkit-tips-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .instructions-note.toolkit-tip {
        display: flex;
        align-items: flex-start;
        gap: 12px;
    }

    .toolkit-tip-number {
        font-weight: 700;
        color: var(--primary-gold-dark);
        min-width: 28px;
    }

    .instructions-note.toolkit-tip span {
        flex: 1;
    }

    .toolkit-tip-empty {
        text-align: center;
        font-style: italic;
        color: var(--muted);
        background: rgba(245, 230, 211, 0.4);
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
    .campaign-planning-panel {
        margin-top: 40px;
        background: rgba(255, 255, 255, 0.94);
        border: 2px solid var(--primary-gold);
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3);
    }

    .campaign-planning-header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;
    }

    .campaign-planning-header h2 {
        margin: 0;
        font-size: 26px;
        color: var(--brown-dark);
    }

    .campaign-planning-actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .campaign-planning-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 18px;
        margin-bottom: 20px;
    }

    .campaign-planning-field {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .campaign-planning-field label {
        font-weight: 600;
        color: var(--brown-dark);
        font-size: 14px;
    }

    .campaign-planning-field input,
    .campaign-planning-field textarea,
    .campaign-planning-field select {
        border: 2px solid var(--border);
        border-radius: 10px;
        padding: 10px 14px;
        font-size: 14px;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
        background: rgba(255, 255, 255, 0.95);
    }

    .campaign-planning-field input:focus,
    .campaign-planning-field textarea:focus,
    .campaign-planning-field select:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
    }

    .campaign-planning-field textarea {
        resize: vertical;
        min-height: 90px;
    }
    .campaign-planning-summary {
        background: rgba(245, 230, 211, 0.5);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 18px;
        line-height: 1.6;
        color: var(--brown-dark);
    }

    .campaign-planning-summary strong {
        color: var(--primary-gold-dark);
    }

    .management-actions-row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-bottom: 20px;
        align-items: center;
    }

    .management-calculator-panel {
        display: none;
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 18px;
        margin-bottom: 20px;
        box-shadow: 0 4px 18px rgba(212, 175, 55, 0.25);
    }

    .management-calculator-panel.active {
        display: block;
    }

    .management-calculator-display {
        width: 100%;
        padding: 14px;
        border-radius: 10px;
        border: 1px solid var(--border);
        background: rgba(0, 0, 0, 0.05);
        font-size: 24px;
        font-weight: 600;
        text-align: left;
        margin-bottom: 12px;
        direction: ltr;
    }

    .management-calculator-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;
    }

    .management-calculator-grid button {
        padding: 12px;
        border: none;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.85);
        border: 1px solid var(--border);
        font-size: 16px;
        font-weight: 600;
        color: var(--brown-dark);
        cursor: pointer;
        transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    }

    .management-calculator-grid button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
    }

    .management-calculator-grid button.operator {
        background: rgba(212, 175, 55, 0.15);
        border-color: rgba(212, 175, 55, 0.4);
        color: var(--primary-gold-dark);
    }

    .management-calculator-grid button.span-two {
        grid-column: span 2;
        background: linear-gradient(120deg, var(--primary-gold), var(--primary-gold-dark));
        color: white;
        border-color: transparent;
    }
    .donor-name-input {
        width: 100%;
        border: none;
        border-bottom: 2px solid transparent;
        border-radius: 0;
        padding: 0;
        font-size: 18px;
        font-weight: 600;
        color: var(--brown-dark);
        background: transparent;
    }

    .donor-name-input:focus {
        outline: none;
        border-bottom-color: var(--primary-gold);
        box-shadow: none;
    }
    .stat-card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border: 2px solid var(--primary-gold);
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3);
        text-align: center;
    }

    .stat-label {
        font-size: 16px;
        color: var(--muted);
        margin-bottom: 15px;
        font-weight: 500;
    }

    .stat-value {
        font-size: 36px;
        font-weight: 700;
        color: var(--primary-gold-dark);
        margin-bottom: 10px;
    }
    .stat-subvalue {
        font-size: 18px;
        color: var(--brown-medium);
    }
    /* מדור ניהול */
    .management-section {
        background: rgba(255, 255, 255, 0.5);
    }
    
    /* מדור כתובות */
    .addresses-section {
        background: rgba(255, 255, 255, 0.5);
    }
    
    .addresses-panel {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .addresses-form {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }
    
    .addresses-form h3 {
        margin-bottom: 20px;
        color: var(--brown-dark);
        font-size: 24px;
    }
    
    .address-form-row {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
    }
    
    .address-form-row label {
        font-weight: 600;
        color: var(--brown-dark);
        font-size: 14px;
    }
    
    .address-form-row input {
        padding: 10px 14px;
        border: 2px solid var(--border);
        border-radius: 8px;
        font-size: 16px;
        background: white;
    }
    
    .address-form-row input:focus {
        outline: none;
        border-color: var(--primary-gold);
    }
    
    .address-form-actions {
        display: flex;
        gap: 12px;
        margin-top: 20px;
    }
    
    .addresses-list-container {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }
    
    .addresses-list-container h3 {
        margin-bottom: 20px;
        color: var(--brown-dark);
        font-size: 24px;
    }
    
    .addresses-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    
    .address-item {
        background: white;
        border: 2px solid var(--border);
        border-radius: 12px;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s;
    }
    
    .address-item:hover {
        border-color: var(--primary-gold);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
    }
    
    .address-item-info {
        flex: 1;
    }
    
    .address-item-info div {
        margin-bottom: 6px;
        color: var(--brown-dark);
    }
    
    .address-item-info strong {
        color: var(--primary-gold);
    }
    
    .address-item-actions {
        display: flex;
        gap: 8px;
    }
    
    .address-item-actions button {
        padding: 8px 16px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
    }
    
    .address-item-actions .btn-export {
        background: var(--primary-gold);
        color: white;
    }
    
    .address-item-actions .btn-delete {
        background: #ff4444;
        color: white;
    }
    .section-header {
        font-size: 32px;
        color: var(--brown-dark);
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 3px solid var(--primary-gold);
        font-weight: 600;
    }

    .management-tabs {
        display: flex;
        gap: 15px;
        margin-bottom: 30px;
        flex-wrap: wrap;
    }
    /* וילון ניווט למדור המנהל */
    .admin-curtain {
        margin-bottom: 20px;
        border-radius: 16px;
        border: 1px solid var(--border);
        background: linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.6));
        box-shadow: 0 12px 36px rgba(0,0,0,0.10);
        overflow: visible; /* הורה לא חותך */
        backdrop-filter: blur(10px);
        position: sticky; /* תמיד בהישג יד */
        top: 8px;
        z-index: 11000; /* מעל התוכן */
        isolation: isolate; /* שכבת ציור נפרדת */
    }
    .admin-curtain::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 16px;
        pointer-events: none;
        box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.6),
            0 6px 20px rgba(212,175,55,0.12);
    }
    .admin-curtain-toggle {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 14px 18px;
        background: transparent;
        border: none;
        cursor: pointer;
        color: var(--text);
        font-weight: 700;
        font-size: 16px;
        outline: none;
    }
    .admin-curtain-toggle .label {
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }
    .admin-curtain-toggle .label .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--primary-gold);
        box-shadow: 0 0 0 4px rgba(212,175,55,0.15);
    }
    .admin-curtain-toggle .chevron {
        transition: transform 0.25s ease;
        transform-origin: 50% 45%;
    }
    .admin-curtain.open .admin-curtain-toggle .chevron {
        transform: rotate(180deg);
    }
    .admin-curtain-toggle:focus-visible {
        outline: none;
        box-shadow: 0 0 0 3px rgba(212,175,55,0.35);
        border-radius: 12px;
    }
    .admin-curtain-panel {
        display: block; /* נשתמש באנימציה עם max-height */
        overflow: hidden; /* הכרחי לאנימציית גובה */
        border-top: 1px dashed var(--border);
        position: relative;
        z-index: 11001;
        max-height: 0; /* מצב סגור */
        transition: max-height 0.35s ease;
    }
    .admin-curtain.open .admin-curtain-panel {
        max-height: 1000px; /* ערך התחלתי, יוחלף דינמית ב-JS */
    }
    /* מציגים את הטאבים המקוריים בתוך הוילון כגריד מעוצב */
    .admin-curtain-panel .management-tabs {
        display: grid !important;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 10px;
        padding: 14px;
        margin: 0;
        position: relative;
        z-index: 11002;
    }
    .admin-curtain-panel .management-tab {
        width: 100%;
        text-align: center;
        border-radius: 12px;
        background: rgba(255,255,255,0.9);
        border: 1px solid var(--border);
        transition: all 0.2s ease;
        outline: none;
    }
    .admin-curtain-panel .management-tab:hover {
        border-color: var(--primary-gold);
        box-shadow: 0 4px 16px rgba(212,175,55,0.15);
        transform: translateY(-1px);
    }
    .admin-curtain-panel .management-tab:focus-visible {
        box-shadow: 0 0 0 3px rgba(212,175,55,0.35);
    }
    @media (max-width: 820px) {
        .admin-curtain-panel .management-tabs {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 560px) {
        .admin-curtain-panel .management-tabs {
            grid-template-columns: 1fr;
        }
    }

    .management-tab {
        padding: 12px 24px;
        background: rgba(255, 255, 255, 0.9);
        border: 2px solid var(--border);
        border-radius: 12px; 
        color: var(--brown-dark);
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .management-tab:hover {
        border-color: var(--primary-gold);
        background: rgba(212, 175, 55, 0.1);
    }

    .management-tab.active {
        background: var(--primary-gold);
        color: white;
        border-color: var(--primary-gold-dark);
    }

    .management-content {
        display: none;
    }

    .management-content.active {
        display: block;
    }

    .password-settings-panel {
        background: rgba(255, 255, 255, 0.95);
        border: 2px solid var(--border);
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 8px 32px rgba(212, 175, 55, 0.2);
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .password-toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .password-lock-note {
        font-size: 13px;
        color: var(--muted);
        line-height: 1.5;
    }

    .switch-label {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        color: var(--brown-dark);
    }

    .password-sections h4,
    .password-update-form h4 {
        margin-bottom: 10px;
        color: var(--brown-dark);
    }

    .password-sections-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        gap: 12px;
    }

    .password-section-option {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px;
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid var(--border);
        border-radius: 10px;
    }

    .password-section-option input {
        transform: scale(1.1);
    }

    .password-update-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .password-inputs {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 12px;
    }

    .password-inputs input {
        padding: 10px 12px;
        border: 2px solid var(--border);
        border-radius: 8px;
        font-size: 14px;
        transition: border-color 0.2s ease, background 0.2s ease;
    }

    .password-inputs input:focus {
        outline: none;
        border-color: var(--primary-gold);
        background: rgba(255, 255, 255, 0.95);
    }

    .password-actions {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
    }

    .password-hint {
        font-size: 13px;
        color: var(--muted);
    }

    /* ניהול קבוצות */
    .groups-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 25px;
        margin-top: 20px;
    }

    .group-card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border: 3px solid var(--border);
        border-radius: 16px;
        padding: 25px;
        box-shadow: 0 8px 32px rgba(212, 175, 55, 0.2);
        transition: all 0.3s ease;
        cursor: grab;
    }

    .group-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(212, 175, 55, 0.3);
        border-color: var(--primary-gold);
    }

    .group-card.dragging {
        opacity: 0.65;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        cursor: grabbing;
        transform: scale(0.995);
    }

    .group-card.drag-over {
        border-color: var(--primary-gold);
        box-shadow: 0 12px 40px rgba(212, 175, 55, 0.45);
    }

    .group-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 2px solid var(--border);
    }

    .group-name-input {
        font-size: 20px;
        font-weight: 700;
        color: var(--brown-dark);
        border: none;
        background: transparent;
        padding: 5px 10px;
        border-radius: 8px;
        width: 100%;
        max-width: 200px;
    }

    .group-name-input:focus {
        outline: 2px solid var(--primary-gold);
        background: rgba(255, 255, 255, 0.8);
    }

    .group-stats {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        font-size: 14px;
    }

    .group-stat {
        text-align: center;
    }

    .group-stat-label {
        color: var(--muted);
        font-size: 12px;
        margin-bottom: 5px;
    }

    .group-stat-value {
        font-size: 18px;
        font-weight: 600;
        color: var(--brown-dark);
    }

    .group-progress {
        width: 100%;
        height: 12px;
        background: rgba(212, 175, 55, 0.2);
        border-radius: 6px;
        overflow: hidden;
        margin: 15px 0;
    }

    .group-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--primary-gold) 0%, var(--accent-gold) 100%);
        transition: width 0.5s ease;
    }

    .group-goal-input {
        width: 100%;
        padding: 10px;
        border: 2px solid var(--border);
        border-radius: 8px;
        font-size: 14px;
        margin-bottom: 15px;
    }
    .group-goal-input:focus {
        outline: none;
        border-color: var(--primary-gold);
    }

    .group-donors-list {
        max-height: 200px;
        overflow-y: auto;
        margin-bottom: 15px;
        padding: 10px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 8px;
    }
    .group-donor-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        padding: 8px;
        margin-bottom: 5px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 6px;
        font-size: 13px;
    }
    .group-donor-details {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .group-donor-name {
        font-weight: 500;
        color: var(--brown-dark);
    }

    .group-donor-amount {
        font-weight: 600;
        color: var(--primary-gold-dark);
    }

    .group-donor-actions {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .group-donor-payment,
    .group-donor-delete {
        padding: 4px 10px;
        border: none;
        border-radius: 6px;
        color: #fff;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .group-donor-payment {
        background: rgba(59, 130, 246, 0.9);
    }

    .group-donor-payment:hover {
        background: rgba(37, 99, 235, 1);
        transform: translateY(-1px);
        box-shadow: 0 4px 10px rgba(37, 99, 235, 0.35);
    }

    .group-donor-delete {
        background: rgba(239, 68, 68, 0.9);
    }

    .group-donor-delete:hover {
        background: rgba(220, 38, 38, 1);
        transform: translateY(-1px);
        box-shadow: 0 4px 10px rgba(239, 68, 68, 0.35);
    }

    .group-excel-upload {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
    }

    .group-excel-button {
        padding: 8px 14px;
        background: var(--primary-gold);
        color: var(--brown-dark);
        border: none;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .group-excel-button:hover {
        background: var(--primary-gold-dark);
        color: #fff;
    }

    .add-donor-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 2px solid var(--border);
    }

    .add-donor-form input {
        padding: 10px;
        border: 2px solid var(--border);
        border-radius: 8px;
        font-size: 14px;
    }
    .add-donor-form input:focus {
        outline: none;
        border-color: var(--primary-gold);
    }

    .btn {
        padding: 16px 32px;
        background: var(--primary-gold);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: var(--button-font-size);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        min-height: 52px;
        min-width: 120px;
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
    }

    .btn:hover,
    .btn:focus {
        background: var(--primary-gold-dark);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
        outline: none;
    }

    .btn:focus-visible {
        outline: 3px solid var(--primary-gold-light);
        outline-offset: 2px;
    }

    .btn:active {
        transform: translateY(0);
    }

    .btn-secondary {
        background: rgba(255, 255, 255, 0.9);
        color: var(--brown-dark);
        border: 2px solid var(--border);
        min-height: 52px;
        min-width: 120px;
    }

    .btn-secondary:hover,
    .btn-secondary:focus {
        background: white;
        border-color: var(--primary-gold);
        outline: none;
    }

    .btn-secondary:focus-visible {
        outline: 3px solid var(--primary-gold-light);
        outline-offset: 2px;
    }

    .btn-danger {
        background: var(--error);
        min-height: 52px;
        min-width: 120px;
    }

    .btn-danger:hover,
    .btn-danger:focus {
        background: #dc2626;
        outline: none;
    }

    .btn-danger:focus-visible {
        outline: 3px solid rgba(255, 255, 255, 0.5);
        outline-offset: 2px;
    }

    /* ניהול מתרימים */
    .default-goal-panel {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 16px;
        padding: 20px;
        margin-bottom: 25px;
        border: 2px solid var(--border);
    }

    .default-goal-panel label {
        display: block;
        margin-bottom: 10px;
        font-weight: 600;
        color: var(--brown-dark);
    }

    .default-goal-controls {
        display: flex;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
    }

    .default-goal-controls input {
        width: 160px;
        padding: 12px;
        border: 2px solid var(--border);
        border-radius: 8px;
        font-size: 14px;
    }

    .default-goal-controls input:focus {
        outline: none;
        border-color: var(--primary-gold);
    }

    .default-goal-note {
        margin-top: 10px;
        font-size: 13px;
        color: var(--muted);
    }

    .donors-management {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 16px;
        padding: 25px;
        margin-bottom: 25px;
    }

    .donors-search-bar {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 18px;
    }

    .donors-search-input-wrapper {
        position: relative;
        width: 100%;
        max-width: 320px;
    }
    .donors-search-input {
        width: 100%;
        padding: 12px 44px 12px 16px;
        border: 2px solid var(--border);
        border-radius: 12px;
        font-size: 14px;
        color: var(--brown-dark);
        background: #fff;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
        direction: rtl;
    }

    .donors-search-input:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
    }

    .donor-search-clear {
        position: absolute;
        top: 50%;
        left: 14px;
        transform: translateY(-50%);
        background: transparent;
        border: none;
        color: var(--muted);
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        transition: color 0.2s ease, transform 0.2s ease;
    }

    .donor-search-clear:hover {
        color: var(--primary-gold);
        transform: translateY(-50%) scale(1.1);
    }

    .donors-search-hint {
        font-size: 12px;
        color: var(--muted);
    }

    .donors-search-meta {
        font-size: 13px;
        color: var(--muted);
        margin-bottom: 12px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 8px;
        color: var(--brown-dark);
        font-weight: 500;
    }

    .form-group input,
    .form-group select {
        width: 100%;
        padding: clamp(14px, 1.2vw, 18px);
        border: 2px solid var(--border);
        border-radius: 8px;
        font-size: clamp(16px, 1.1vw, 20px);
        min-height: 48px;
    }

    .form-group input:focus,
    .form-group select:focus {
        outline: none;
        border-color: var(--primary-gold);
    }

    .form-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(clamp(220px, 15vw, 280px), 1fr));
        gap: clamp(15px, 1.5vw, 24px);
    }

    .donor-checkbox-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 30px;
    }

    .donor-checkbox {
        width: 20px;
        height: 20px;
        cursor: pointer;
        accent-color: var(--primary-gold);
    }

    .donor-item {
        display: flex;
        align-items: flex-start;
    }

    .donor-item.selected {
        background: rgba(212, 175, 55, 0.1);
        border-left: 4px solid var(--primary-gold);
    }

    .donors-list {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 16px;
        padding: 25px;
    }

    .donor-checkbox-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 30px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .donor-checkbox {
        width: 20px;
        height: 20px;
        cursor: pointer;
        accent-color: var(--primary-gold);
    }

    .donor-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: clamp(18px, 1.5vw, 24px);
        margin-bottom: clamp(12px, 1vw, 16px);
        background: rgba(255, 255, 255, 0.8);
        border: 2px solid var(--border);
        border-radius: 12px;
        transition: all 0.3s ease;
        min-height: 70px;
        -webkit-tap-highlight-color: transparent;
    }

    .donor-item.selected {
        background: rgba(212, 175, 55, 0.15);
        border-left: 4px solid var(--primary-gold);
    }

    .donor-item:hover {
        border-color: var(--primary-gold);
        transform: translateX(-5px);
    }

    .donor-info {
        flex: 1;
    }

    .donor-name {
        font-size: 18px;
        font-weight: 600;
        color: var(--brown-dark);
        margin-bottom: 5px;
    }

    .donor-details {
        font-size: 14px;
        color: var(--muted);
    }

    .donor-actions {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .donor-actions .btn-small {
        padding: 10px 18px;
        font-size: clamp(14px, 0.9vw, 16px);
        min-height: 40px;
        min-width: 90px;
    }
    .donor-item.editing {
        border-color: var(--primary-gold);
        box-shadow: 0 12px 32px rgba(212, 175, 55, 0.28);
        background: rgba(255, 255, 255, 0.95);
    }

    .donor-edit-panel {
        margin-top: 14px;
        background: rgba(255, 255, 255, 0.92);
        border: 2px solid rgba(212, 175, 55, 0.35);
        border-radius: 12px;
        padding: 18px;
        display: none;
        box-shadow: 0 10px 26px rgba(212, 175, 55, 0.16);
    }

    .donor-edit-panel.active {
        display: block;
    }

    .donor-edit-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin-bottom: 16px;
    }

    .donor-edit-field {
        display: flex;
        flex-direction: column;
    }

    .donor-edit-field label {
        font-size: 12px;
        color: var(--muted);
        margin-bottom: 6px;
    }

    .donor-edit-field input,
    .donor-edit-field select {
        padding: 10px;
        border: 1px solid var(--border);
        border-radius: 8px;
        font-size: 14px;
    }

    .donor-edit-field input:focus,
    .donor-edit-field select:focus {
        outline: none;
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.18);
    }

    .donor-edit-actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }

    /* תצוגה בלייב - Fullscreen */
    .app-container.live-mode {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
    }

    .app-container.live-mode .sidebar-nav {
        display: none;
    }

    .live-view-section {
        background: linear-gradient(135deg, rgba(245, 230, 211, 0.9) 0%, rgba(255, 248, 220, 0.9) 100%);
        position: relative;
        padding: 0;
        min-height: 100vh;
        width: 100%;
    }

    .live-view-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: none;
        z-index: 0;
    }


    .live-content {
        position: relative;
        z-index: 1;
        flex: 1;
        display: flex;
        flex-direction: row;
        height: 100vh;
        padding: 0;
        box-sizing: border-box;
    }
    /* כפתור חזרה וכפתור מסך מלא */
    .back-home-btn,
    .fullscreen-btn {
        position: fixed;
        top: 20px;
        z-index: 10006;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(12px);
        border: 2px solid var(--primary-gold);
        border-radius: 50%;
        color: var(--brown-dark);
        font-size: 22px;
        cursor: pointer;
        box-shadow: 0 6px 24px rgba(212, 175, 55, 0.35);
        transition: all 0.3s ease;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-10px) scale(0.95);
    }

    .back-home-btn {
        right: 20px;
    }

    .fullscreen-btn {
        right: 80px;
    }

    .back-home-btn.visible,
    .fullscreen-btn.visible {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0) scale(1);
    }

    .back-home-btn:hover,
    .fullscreen-btn:hover {
        background: var(--primary-gold);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 9px 28px rgba(212, 175, 55, 0.45);
    }

    .fullscreen-btn.active {
        background: var(--primary-gold);
        color: white;
    }

    /* אזור מתרימים במרכז */
    .live-donors-area {
        flex: 1 1 75%;
        min-width: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        padding: 0;
        overflow: hidden;
        height: 100vh;
        position: relative;
        background: transparent;
    }

    .live-title {
        display: none; /* הסרת הכותרת "מתרימים" */
    }

    .live-donors-container {
        width: 100%;
        max-width: 100%;
        height: 100vh;
        overflow: hidden;
        position: relative;
        background: none;
        background-image: url('http://i.postimg.cc/ZRMCLxgW/wgw-t-t-dhws.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        background-attachment: scroll;
        background-blend-mode: normal;
    }

    .live-donors-scroll {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding: 10px;
        padding-bottom: 0;
        animation: none;
        will-change: transform;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }
    @keyframes scrollUp {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-50%);
        }
    }

    .live-donor-group-header {
        grid-column: 1 / -1;
        background: rgba(255, 255, 255, 0.92);
        border: 3px solid var(--primary-gold);
        border-radius: 18px;
        padding: 18px 22px;
        box-shadow: 0 12px 30px rgba(212, 175, 55, 0.35);
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .group-header-title {
        text-align: center;
        font-size: 28px;
        font-weight: 700;
        color: var(--brown-dark);
        letter-spacing: 1px;
    }

    .group-header-progress-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .group-header-progress-bar {
        width: 100%;
        height: 24px;
        background: rgba(0, 0, 0, 0.08);
        border-radius: 12px;
        overflow: hidden;
        position: relative;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .group-header-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #4CAF50 0%, #45a049 100%);
        border-radius: 12px;
        transition: width 0.6s ease;
        box-shadow: 0 2px 8px rgba(76, 175, 80, 0.4);
    }

    .group-header-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        color: var(--brown-dark);
    }

    .group-header-percentage {
        color: #4CAF50;
        font-weight: 700;
        font-size: 18px;
    }

    .group-header-amounts {
        color: var(--brown-dark);
    }
    .live-donor-card {
        background: rgba(255, 255, 255, 0.92);
        border: 3px solid var(--primary-gold);
        border-radius: 18px;
        padding: 14px 18px;
        box-shadow: 0 12px 30px rgba(212, 175, 55, 0.35);
        min-height: 110px;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-start;
        gap: 18px;
        min-width: 0;
        box-sizing: border-box;
        transform: translate3d(0, 0, 0);
        will-change: contents;
    }

    .live-donor-progress-circle-wrapper {
        width: 80px;
        height: 80px;
        position: relative;
        flex-shrink: 0;
        margin-left: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* סיירות שטח */
    .scouts-section-panel {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 28px;
        padding: 36px;
        border-radius: 26px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.97) 0%, rgba(255, 247, 229, 0.93) 48%, rgba(241, 226, 192, 0.94) 100%);
        border: 1px solid rgba(212, 175, 55, 0.32);
        box-shadow: 0 26px 46px rgba(212, 175, 55, 0.22);
        overflow: visible;
    }

    .scouts-section-panel::before {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: inherit;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(212, 175, 55, 0.18) 45%, transparent 75%);
        pointer-events: none;
        z-index: 0;
    }

    .scouts-section-panel > * {
        position: relative;
        z-index: 1;
    }

    .scouts-hero {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 24px;
        align-items: stretch;
    }

    .scouts-hero-card {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 22px;
        padding: 28px 30px;
        box-shadow: 0 18px 40px rgba(212, 175, 55, 0.18);
        border: 1px solid rgba(212, 175, 55, 0.22);
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .scouts-hero-card.accent {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 235, 214, 0.92) 100%);
    }

    .scouts-header-text {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .scouts-header-text h2 {
        font-size: 32px;
        font-weight: 700;
        color: var(--brown-dark);
    }

    .scouts-header-text p {
        font-size: 15px;
        color: var(--brown-medium);
        line-height: 1.65;
    }
    .scouts-guideline {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-size: 13px;
        color: var(--brown-medium);
        background: rgba(16, 185, 129, 0.14);
        border-radius: 999px;
        padding: 6px 16px;
        width: fit-content;
    }

    .scouts-stats-wrapper {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }
    .scouts-stats-title {
        font-size: 15px;
        font-weight: 600;
        color: var(--brown-medium);
        letter-spacing: 0.4px;
    }

    .scouts-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 14px;
    }

    .scouts-stat-card {
        background: rgba(255, 255, 255, 0.94);
        border-radius: 18px;
        padding: 18px 20px;
        border: 1px solid rgba(212, 175, 55, 0.22);
        box-shadow: 0 14px 26px rgba(212, 175, 55, 0.16);
        display: flex;
        flex-direction: column;
        gap: 6px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .scouts-stat-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 24px 40px rgba(212, 175, 55, 0.28);
    }
    .scouts-stat-label {
        font-size: 13px;
        color: var(--muted);
    }

    .scouts-stat-value {
        font-size: 26px;
        font-weight: 700;
        color: var(--brown-dark);
    }
    .scouts-toolbar {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        flex-wrap: wrap;
        margin-top: 4px;
    }
    .scouts-day-switch {
        display: inline-flex;
        gap: 12px;
        padding: 12px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(212, 175, 55, 0.25);
        backdrop-filter: blur(12px);
    }

    .scouts-day-switch button {
        padding: 10px 22px;
        border-radius: 999px;
        border: 1px solid transparent;
        background: rgba(212, 175, 55, 0.18);
        color: var(--brown-dark);
        font-size: 15px;
        cursor: pointer;
        transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }

    .scouts-day-switch button.active {
        background: linear-gradient(135deg, var(--primary-gold) 0%, var(--primary-gold-dark) 100%);
        color: #fff;
        box-shadow: 0 12px 24px rgba(212, 175, 55, 0.35);
    }

    .scouts-day-switch button:hover {
        transform: translateY(-1px);
    }

    .scouts-actions {
        display: flex;
        gap: 12px;
    }

    .scouts-actions .btn {
        min-width: 180px;
        justify-content: center;
        font-size: 15px;
        font-weight: 600;
        padding-inline: 32px;
        box-shadow: 0 16px 30px rgba(212, 175, 55, 0.22);
    }

    @media (max-width: 960px) {
        .scouts-section-panel {
            padding: 28px;
        }
        .scouts-hero-card {
            padding: 24px;
        }
    .scouts-stats {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        }
    }

    @media (max-width: 640px) {
        .scouts-section-panel {
            padding: 24px 18px;
        }
        .scouts-hero-card {
            padding: 22px;
        }
        .scouts-header-text h2 {
            font-size: 26px;
        }
        .scouts-toolbar {
            gap: 14px;
        }
        .scouts-actions .btn {
            min-width: 140px;
            padding-inline: 18px;
        }
    }

    .scouts-teams-list {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 22px;
    }
    .scout-team-card {
        border-radius: 18px;
        padding: 22px;
        background: rgba(255, 255, 255, 0.96);
        border: 1px solid rgba(212, 175, 55, 0.22);
        box-shadow: 0 14px 28px rgba(212, 175, 55, 0.15);
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .scout-team-header {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 14px;
        align-items: center;
    }

    .scout-team-meta {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 12px;
        align-items: center;
    }

    .scout-team-meta label {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 12px;
        font-weight: 600;
        color: rgba(34, 68, 54, 0.75);
    }

    .scout-team-meta input {
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid rgba(212, 175, 55, 0.24);
        background: rgba(255, 255, 255, 0.94);
        font-size: 14px;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .scout-team-meta input:focus {
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.18);
        outline: none;
    }

    .scout-team-header input,
    .scout-team-header select {
        padding: 12px 14px;
        border-radius: 14px;
        border: 1px solid rgba(212, 175, 55, 0.28);
        background: rgba(255, 255, 255, 0.86);
        font-size: 15px;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.6);
    }

    .scout-team-header button {
        padding: 11px 16px;
        border-radius: 14px;
        border: none;
        background: rgba(220, 38, 38, 0.85);
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 12px 24px rgba(220, 38, 38, 0.25);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .scout-team-header button:hover {
        transform: translateY(-1px);
        box-shadow: 0 18px 32px rgba(220, 38, 38, 0.32);
    }

    .scout-team-summary {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 14px;
    }

    .scout-summary-card {
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: rgba(16, 185, 129, 0.12);
        color: var(--brown-dark);
        padding: 14px;
        border-radius: 16px;
        font-size: 13px;
        line-height: 1.4;
        border: 1px solid rgba(16, 185, 129, 0.18);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }

    .scout-summary-label {
        font-size: 12px;
        font-weight: 600;
        color: rgba(34, 68, 54, 0.8);
        letter-spacing: 0.4px;
    }

    .scout-summary-value {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 18px;
        font-weight: 600;
    }

    .scout-summary-value.scout-summary-static {
        color: var(--brown-dark);
    }

    .scout-summary-input {
        flex: 1;
        min-width: 0;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid rgba(16, 185, 129, 0.3);
        background: rgba(255, 255, 255, 0.95);
        font-size: 16px;
        font-weight: 600;
        color: var(--brown-dark);
        text-align: center;
    }

    .scout-summary-input:focus {
        outline: none;
        border-color: rgba(16, 185, 129, 0.55);
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.18);
    }

    .scout-summary-unit {
        font-size: 14px;
        font-weight: 600;
        color: rgba(34, 68, 54, 0.75);
    }

    .scout-team-table {
        position: relative;
        z-index: 1;
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        border-radius: 16px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.92);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }

    .scout-team-table thead {
        background: rgba(212, 175, 55, 0.16);
    }

    .scout-team-table th,
    .scout-team-table td {
        padding: 12px 16px;
        text-align: right;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        font-size: 14px;
    }

    .scout-team-table th.scout-member-actions-header,
    .scout-team-table td.scout-member-actions {
        width: 140px;
        white-space: nowrap;
    }

    .scout-team-table th.scout-member-name-header,
    .scout-team-table td.scout-member-name-cell {
        width: 100%;
    }

    .scout-team-table tbody tr:last-child td {
        border-bottom: none;
    }

    .scout-member-name-input,
    .scout-member-new-name-input {
        width: 100%;
        min-width: 0;
        max-width: 100%;
        padding: 12px 14px;
        border-radius: 12px;
        border: 1px solid rgba(212, 175, 55, 0.24);
        background: rgba(255, 255, 255, 0.94);
        font-size: 15px;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .scout-member-name-input:focus,
    .scout-member-new-name-input:focus {
        border-color: var(--primary-gold);
        box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.18);
        outline: none;
    }

    .scout-team-table .scout-member-actions {
        display: flex;
        gap: 8px;
        justify-content: flex-start;
    }

    .scout-team-table .scout-member-actions button {
        padding: 8px 12px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
    }

    .scout-member-remove-btn {
        background: rgba(220, 38, 38, 0.12);
        color: rgba(185, 28, 28, 0.96);
    }

    .scout-member-remove-btn:hover {
        background: rgba(220, 38, 38, 0.18);
    }

    .scout-team-empty {
        color: var(--muted);
        font-size: 13px;
        text-align: center;
        padding: 18px 0;
    }

    .scout-member-new-row td {
        background: rgba(245, 230, 211, 0.35);
    }

    .scout-member-new-hint {
        font-size: 12px;
        color: var(--muted);
    }
    .scout-member-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        padding: 6px 12px;
        border-radius: 999px;
        background: rgba(212, 175, 55, 0.16);
        color: var(--brown-dark);
    }

    .live-donor-progress-circle {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .live-donor-progress-circle svg {
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
    }

    .live-donor-progress-bg {
        fill: none;
        stroke: rgba(212, 175, 55, 0.2);
        stroke-width: 6;
    }

    .live-donor-progress-fill {
        fill: none;
        stroke-width: 6;
        stroke-linecap: round;
    }

    .live-donor-percentage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        font-weight: 700;
        color: var(--brown-dark);
    }

    .live-donor-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: flex-start;
        text-align: left;
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        margin-right: auto;
    }

    .live-donor-name {
        font-size: 18px;
        font-weight: 700;
        color: var(--brown-dark);
        margin: 0;
        line-height: 1.3;
        margin-bottom: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .live-donor-group {
        font-size: 13px;
        font-weight: 500;
        color: var(--muted);
        margin: 0;
    }

    .live-donor-amount {
        font-size: 14px;
        font-weight: 600;
        color: var(--brown-dark);
        margin-top: 2px;
    }

    /* אזור מובילים בצד */
    .live-leaders-sidebar {
        flex: 0 0 25%;
        max-width: 360px;
        min-width: 220px;
        background: transparent;
        backdrop-filter: none;
        border-right: none;
        padding: 16px 18px;
        overflow: visible;
        box-shadow: none;
        display: flex;
        flex-direction: column;
    }
    .live-leaders-scroll-wrapper {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
        opacity: 1;
        filter: brightness(1) saturate(1);
        transition: opacity 0.6s ease-in-out, filter 0.6s ease-in-out;
        /* הסתרת scrollbar בעמודת המובילים */
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
    }
    
    .live-leaders-scroll-wrapper::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }

    .live-leaders-scroll-wrapper.fade-bright {
        filter: brightness(1.9) saturate(1.4);
    }

    .live-leaders-scroll {
        padding-bottom: 10px;
    }
    
    .live-leaders-scroll-clone {
        padding-bottom: 10px;
    }
    
    /* גלילה אינסופית למובילים */
    #leadersScrollPrimary {
        will-change: transform;
    }
    
    #leadersScrollClone {
        will-change: transform;
    }

    .live-leaders-content {
        transition: opacity 0.6s ease-in-out;
    }

    .live-leaders-content.hidden {
        opacity: 0;
    }

    .leaders-title {
        font-size: 32px;
        color: var(--brown-dark);
        margin-bottom: 18px;
        text-align: center;
        padding-bottom: 12px;
        border-bottom: 2px solid rgba(212, 175, 55, 0.6);
        font-weight: 700;
    }

    .live-leaders-scroll-wrapper {
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
        /* הסתרת scrollbar בעמודת המובילים */
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
    }
    
    .live-leaders-scroll-wrapper::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }

    .live-leaders-scroll {
        display: flex;
        flex-direction: column;
        gap: 0;
        animation: none;
        will-change: auto;
    }

    /* הקלון יוצב אחרי התוכן המקורי לגלילה אינסופית */
    .live-leaders-scroll-clone {
        display: block;
    }

    @keyframes leadersScroll {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-50%);
        }
    }
    .leader-item {
        background: rgba(255, 255, 255, 0.98);
        border: 1px solid rgba(212, 175, 55, 0.35);
        border-radius: 12px;
        padding: 12px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease;
        box-shadow: 0 4px 14px rgba(212, 175, 55, 0.18);
        position: relative;
        overflow: hidden;
        margin-bottom: 0;
    }

    .leader-item:hover {
        border-color: var(--primary-gold);
        transform: translateX(-5px);
        box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
    }

    /* אנימציות עדינות */
    @keyframes subtleGlow {
        0%, 100% {
            box-shadow: 0 6px 20px rgba(255, 215, 0, 0.25),
                        inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }
        50% {
            box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }
    }

    @keyframes subtleFloat {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-2px);
        }
    }

    /* עיצוב מיוחד למקום הראשון - זהב בולט */
    .leader-item.rank-1 {
        background: linear-gradient(135deg, 
            rgba(255, 215, 0, 0.25) 0%, 
            rgba(255, 248, 180, 0.9) 50%,
            rgba(255, 255, 240, 0.95) 100%);
        border: 3px solid rgba(255, 215, 0, 0.75);
        box-shadow: 0 10px 35px rgba(255, 215, 0, 0.45),
                    0 0 25px rgba(255, 215, 0, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9);
        padding: 16px 20px;
        animation: subtleGlow 3s ease-in-out infinite;
    }

    .leader-item.rank-1::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 215, 0, 0.6) 50%, 
            transparent 100%);
    }

    .leader-item.rank-1:hover {
        border-color: rgba(255, 215, 0, 0.7);
        box-shadow: 0 10px 32px rgba(255, 215, 0, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8);
        transform: translateX(-5px) translateY(-2px);
        animation: none;
    }

    /* עיצוב מיוחד למקום שני - כסף בולט */
    .leader-item.rank-2 {
        background: linear-gradient(135deg, 
            rgba(192, 192, 192, 0.2) 0%, 
            rgba(230, 230, 230, 0.9) 50%,
            rgba(250, 250, 250, 0.95) 100%);
        border: 2px solid rgba(192, 192, 192, 0.7);
        box-shadow: 0 8px 28px rgba(192, 192, 192, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }

    .leader-item.rank-2:hover {
        border-color: rgba(192, 192, 192, 0.6);
        box-shadow: 0 7px 22px rgba(192, 192, 192, 0.3);
        transform: translateX(-5px) translateY(-1px);
    }

    /* עיצוב מיוחד למקום שלישי - ארד בולט */
    .leader-item.rank-3 {
        background: linear-gradient(135deg, 
            rgba(205, 127, 50, 0.2) 0%, 
            rgba(255, 220, 180, 0.9) 50%,
            rgba(255, 245, 230, 0.95) 100%);
        border: 2px solid rgba(205, 127, 50, 0.7);
        box-shadow: 0 8px 28px rgba(205, 127, 50, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }

    .leader-item.rank-3:hover {
        border-color: rgba(205, 127, 50, 0.6);
        box-shadow: 0 7px 22px rgba(205, 127, 50, 0.3);
        transform: translateX(-5px) translateY(-1px);
    }

    /* עיצוב מיוחד למקום רביעי - זהב כהה בולט */
    .leader-item.rank-4 {
        background: linear-gradient(135deg, 
            rgba(184, 134, 11, 0.18) 0%, 
            rgba(255, 240, 200, 0.9) 50%,
            rgba(255, 250, 235, 0.95) 100%);
        border: 2px solid rgba(184, 134, 11, 0.65);
        box-shadow: 0 7px 25px rgba(184, 134, 11, 0.35),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }

    .leader-item.rank-4:hover {
        border-color: rgba(184, 134, 11, 0.5);
        box-shadow: 0 6px 20px rgba(184, 134, 11, 0.25);
        transform: translateX(-5px);
    }

    /* עיצוב מיוחד למקום חמישי - חום בולט */
    .leader-item.rank-5 {
        background: linear-gradient(135deg, 
            rgba(139, 69, 19, 0.18) 0%, 
            rgba(255, 230, 200, 0.9) 50%,
            rgba(255, 245, 230, 0.95) 100%);
        border: 2px solid rgba(139, 69, 19, 0.65);
        box-shadow: 0 7px 25px rgba(139, 69, 19, 0.35),
                    inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }

    .leader-item.rank-5:hover {
        border-color: rgba(139, 69, 19, 0.5);
        box-shadow: 0 6px 20px rgba(139, 69, 19, 0.25);
        transform: translateX(-5px);
    }

    .leader-rank {
        font-size: 16px;
        font-weight: 700;
        color: var(--primary-gold-dark);
        min-width: 42px;
        text-align: center;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }

    .leader-item.rank-1 .leader-rank {
        color: #FFD700;
        font-weight: 800;
        text-shadow: 0 2px 8px rgba(255, 215, 0, 0.4);
    }

    .leader-item.rank-1 .leader-rank::after {
        content: '🥇';
        font-size: 36px;
        margin-right: 6px;
        transition: transform 0.3s ease;
        display: inline-block;
        line-height: 1;
    }

    .leader-item.rank-1:hover .leader-rank::after {
        transform: scale(1.1) rotate(5deg);
    }

    .leader-item.rank-2 .leader-rank {
        color: #C0C0C0;
        text-shadow: 0 2px 6px rgba(192, 192, 192, 0.3);
    }

    .leader-item.rank-2 .leader-rank::after {
        content: '🥈';
        font-size: 32px;
        margin-right: 6px;
        transition: transform 0.3s ease;
        display: inline-block;
        line-height: 1;
    }

    .leader-item.rank-2:hover .leader-rank::after {
        transform: scale(1.05);
    }

    .leader-item.rank-3 .leader-rank {
        color: #CD7F32;
        text-shadow: 0 2px 6px rgba(205, 127, 50, 0.3);
    }

    .leader-item.rank-3 .leader-rank::after {
        content: '🥉';
        font-size: 32px;
        margin-right: 6px;
        transition: transform 0.3s ease;
        display: inline-block;
        line-height: 1;
    }

    .leader-item.rank-3:hover .leader-rank::after {
        transform: scale(1.05);
    }

    .leader-item.rank-4 .leader-rank {
        color: #8B6914;
    }

    .leader-item.rank-4 .leader-rank::after {
        content: '4️⃣';
        font-size: 28px;
        margin-right: 6px;
        transition: transform 0.3s ease;
        display: inline-block;
        line-height: 1;
    }

    .leader-item.rank-4:hover .leader-rank::after {
        transform: scale(1.05);
    }

    .leader-item.rank-5 .leader-rank {
        color: #654321;
    }

    .leader-item.rank-5 .leader-rank::after {
        content: '5️⃣';
        font-size: 28px;
        margin-right: 6px;
        transition: transform 0.3s ease;
        display: inline-block;
        line-height: 1;
    }

    .leader-item.rank-5:hover .leader-rank::after {
        transform: scale(1.05);
    }

    .leader-info {
        flex: 1;
        margin: 0 12px;
    }

    .leader-name {
        font-size: 16px;
        font-weight: 600;
        color: var(--brown-dark);
        margin-bottom: 2px;
    }

    .leader-amount {
        font-size: 12px;
        color: var(--muted);
    }

    .leader-total {
        font-size: 18px;
        font-weight: 700;
        color: var(--primary-gold-dark);
    }

    .leader-item.rank-1 .leader-total {
        color: #FFD700;
        font-weight: 800;
        font-size: 20px;
        text-shadow: 0 2px 6px rgba(255, 215, 0, 0.3);
    }

    .leader-item.rank-1 .leader-name {
        font-weight: 800;
        color: #8B4513;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }


    .leaders-targets-section {
        margin-top: 24px;
        border-top: 1px solid var(--border);
        padding-top: 16px;
    }

    .leaders-overall-progress {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    .leaders-overall-progress-label {
        font-size: 18px;
        font-weight: 600;
        color: var(--brown-dark);
        text-align: center;
        letter-spacing: 0.3px;
    }

    .leaders-overall-progress-bar {
        position: relative;
        height: 60px;
        border-radius: 22px;
        background: rgba(187, 247, 208, 0.5);
        box-shadow: inset 0 0 0 2px rgba(21, 128, 61, 0.18), 0 22px 36px rgba(34, 197, 94, 0.22);
        overflow: hidden;
        width: 100%;
    }

    .leaders-overall-progress-fill {
        position: absolute;
        top: 0;
        right: 0;
        left: auto;
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #0f9a43 0%, #16a34a 55%, #22c55e 100%);
        box-shadow: 0 12px 26px rgba(34, 197, 94, 0.45);
        transition: width 0.6s ease;
        border-radius: inherit;
    }

    .leaders-overall-progress-bar.no-goal .leaders-overall-progress-fill {
        width: 0%;
        box-shadow: none;
    }

    .leaders-overall-progress-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: clamp(20px, 2.8vw, 28px);
        font-weight: 800;
        color: #134e1d;
        text-shadow: 0 3px 12px rgba(255, 255, 255, 0.5);
        white-space: nowrap;
        pointer-events: none;
    }

    .leaders-overall-progress-note {
        font-size: clamp(18px, 2.6vw, 26px);
        font-weight: 600;
        color: rgba(21, 128, 61, 0.9);
        text-align: center;
    }

    .leaders-targets-title {
        margin-top: 20px;
    }


    .leaders-targets-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
    .leader-target-card {
        background: rgba(255, 255, 255, 0.9);
        border: 2px solid var(--border);
        border-radius: 12px;
        padding: 18px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-shadow: 0 3px 12px rgba(212, 175, 55, 0.18);
        width: 100%;
        margin-bottom: 0;
    }
    .leader-target-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--brown-dark);
        text-align: right;
    }
    .leader-target-meta {
        font-size: 12px;
        color: var(--muted);
        text-align: right;
        font-weight: 400;
    }

    .leader-target-progress-bar {
        position: relative;
        width: 100%;
        height: 26px;
        background: #ededed;
        border-radius: 14px;
        overflow: hidden;
    }
    .leader-target-progress-fill {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, #b9f6ab, #7fe76a);
        border-radius: 14px;
        transition: width 0.6s ease;
    }

    .leader-target-progress-fill.complete {
        background: linear-gradient(90deg, #72e76f, #3ed45b);
    }
    .leader-target-progress-text {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 12px;
        font-size: 13px;
        font-weight: 500;
        color: #1f2d0a;
        direction: rtl;
        text-align: center;
        white-space: nowrap;
    }
    /* הודעות */
    .notification {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border: 2px solid var(--primary-gold);
        border-radius: 16px;
        padding: 20px 40px;
        color: var(--brown-dark);
        font-size: 18px;
        font-weight: 500;
        z-index: 10000;
        display: none;
        box-shadow: 0 8px 40px rgba(212, 175, 55, 0.4);
    }

    .notification.show {
        display: block;
        animation: fadeInOut 2s ease;
    }

    body.app-locked {
        overflow: hidden;
    }

    body.app-locked .app-container {
        filter: blur(6px);
        pointer-events: none;
        user-select: none;
    }

    .app-lock-overlay {
        position: fixed;
        inset: 0;
        background: rgba(29, 20, 9, 0.6);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.25s ease, visibility 0.25s ease;
    }

    .app-lock-overlay.hidden {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
    }

    .app-lock-dialog {
        background: rgba(255, 255, 255, 0.96);
        border: 2px solid var(--primary-gold);
        border-radius: 28px;
        padding: 32px;
        width: min(92vw, 420px);
        text-align: center;
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.25);
    }

    .app-lock-dialog h2 {
        margin-bottom: 10px;
        color: var(--brown-dark);
    }

    .app-lock-dialog p {
        margin-bottom: 14px;
        color: var(--muted);
        line-height: 1.5;
    }

    .app-lock-password-input {
        width: 100%;
        padding: 14px;
        border-radius: 999px;
        border: 1px solid var(--border);
        text-align: center;
        font-size: 18px;
        margin-bottom: 12px;
    }

    .app-lock-actions {
        display: flex;
        justify-content: center;
        margin-top: 8px;
    }

    .app-lock-error {
        min-height: 24px;
        margin-top: 14px;
        color: var(--error);
        font-weight: 600;
    }

    @keyframes fadeInOut {
        0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
        10%, 90% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }

    /* סקרולבר */
    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--primary-gold);
        border-radius: 12px;
        box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.4);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-gold-dark);
    }

    html,
    body,
    .content-area {
        scrollbar-width: thin;
        scrollbar-color: var(--primary-gold) transparent;
    }

    /* מסכים גדולים - 70 אינץ' ומעלה */
    @media (min-width: 1920px) {
        .sidebar-nav {
            width: 320px;
        }

        .content-section {
            padding: 50px 60px;
        }

        .section-header {
            font-size: 36px;
        }

        .home-title {
            font-size: 56px;
        }

        .stat-card {
            padding: 36px;
        }

        .live-donor-name {
            font-size: 24px;
        }

        .live-donor-group {
            font-size: 18px;
        }

        .live-donor-amount {
            font-size: 18px;
        }

        .live-donor-card {
            padding: 16px 20px;
            min-height: 120px;
            gap: 15px;
        }

        .live-donor-progress-circle-wrapper {
            width: 100px;
            height: 100px;
            margin-left: 18px;
        }

        .live-donor-progress-circle {
            width: 100%;
            height: 100%;
        }

        .live-donor-progress-bg,
        .live-donor-progress-fill {
            stroke-width: 7;
        }

        .live-donor-percentage {
            font-size: 20px;
        }

        .live-leaders-sidebar {
            width: 380px;
            padding: 45px 32px;
        }

        .leader-item {
            padding: 18px 22px;
        }

        .leaders-list {
            gap: 14px;
        }

        .leaders-title {
            font-size: 40px;
            margin-bottom: 32px;
        }
        .leader-name {
            font-size: 22px;
        }

        .leader-amount {
            font-size: 16px;
        }

        .leader-total {
            font-size: 28px;
        }

        .leader-rank {
            font-size: 26px;
        }

        .back-home-btn {
            width: 54px;
            height: 54px;
            font-size: 26px;
        }
    }

    @media (min-width: 2200px) {
        .sidebar-nav {
            width: 360px;
        }

        .content-section {
            padding: 60px 80px;
        }

        .section-header {
            font-size: 40px;
            margin-bottom: 35px;
        }

        .stat-card {
            padding: 42px;
            font-size: 1.05em;
        }

        .home-title {
            font-size: 64px;
            margin-bottom: 40px;
        }

        .live-donors-scroll {
            grid-template-columns: repeat(4, minmax(320px, 1fr));
            gap: 18px;
            padding: 16px;
        }

        .live-donor-card {
            padding: 22px 26px;
            min-height: 150px;
            gap: 26px;
        }

        .live-donor-progress-circle-wrapper {
            width: 120px;
            height: 120px;
            margin-left: 26px;
        }

        .live-donor-percentage {
            font-size: 26px;
        }

        .live-donor-name {
            font-size: 28px;
        }

        .live-donor-group,
        .live-donor-amount {
            font-size: 22px;
        }

        .live-leaders-sidebar {
            width: 420px;
            padding: 50px 38px;
        }

        .leaders-title {
            font-size: 44px;
        }
    }

    @media (min-width: 3000px) {
        .sidebar-nav {
            width: 420px;
        }

        .content-section {
            padding: 80px 110px;
        }

        .section-header {
            font-size: 46px;
        }

        .stat-card {
            padding: 48px;
            font-size: 1.1em;
        }

        .home-title {
            font-size: 72px;
        }

        .live-donors-scroll {
            grid-template-columns: repeat(5, minmax(340px, 1fr));
            gap: 22px;
        }

        .live-donor-card {
            padding: 26px 32px;
            min-height: 170px;
        }

        .live-donor-progress-circle-wrapper {
            width: 140px;
            height: 140px;
            margin-left: 30px;
        }

        .live-donor-percentage {
            font-size: 30px;
        }

        .live-donor-name {
            font-size: 32px;
        }

        .live-donor-group,
        .live-donor-amount {
            font-size: 24px;
        }

        .live-leaders-sidebar {
            width: 480px;
        }

        .leaders-title {
            font-size: 48px;
        }
    }

    /* מסכים גדולים מאוד - 4000px */
    @media (min-width: 4000px) {
        .live-donors-scroll {
            grid-template-columns: repeat(6, minmax(380px, 1fr));
            gap: 28px;
            padding: 24px;
        }

        .live-donor-card {
            padding: 32px 40px;
            min-height: 200px;
            gap: 32px;
        }

        .live-donor-progress-circle-wrapper {
            width: 160px;
            height: 160px;
            margin-left: 36px;
        }

        .live-donor-percentage {
            font-size: 36px;
        }

        .live-donor-name {
            font-size: 38px;
        }

        .live-donor-group,
        .live-donor-amount {
            font-size: 28px;
        }

        .live-leaders-sidebar {
            width: 540px;
            padding: 60px 48px;
        }

        .leaders-title {
            font-size: 54px;
        }

        .leader-name {
            font-size: 28px;
        }

        .leader-total {
            font-size: 36px;
        }

        .back-home-btn,
        .fullscreen-btn {
            width: 64px;
            height: 64px;
            font-size: 28px;
            top: 30px;
        }

        .back-home-btn {
            right: 30px;
        }

        .fullscreen-btn {
            right: 110px;
        }
    }

    /* מסכים גדולים מאוד - 5000px */
    @media (min-width: 5000px) {
        .live-donors-scroll {
            grid-template-columns: repeat(7, minmax(420px, 1fr));
            gap: 32px;
            padding: 28px;
        }

        .live-donor-card {
            padding: 38px 46px;
            min-height: 230px;
            gap: 38px;
        }

        .live-donor-progress-circle-wrapper {
            width: 180px;
            height: 180px;
            margin-left: 42px;
        }

        .live-donor-percentage {
            font-size: 42px;
        }

        .live-donor-name {
            font-size: 44px;
        }

        .live-donor-group,
        .live-donor-amount {
            font-size: 32px;
        }

        .live-leaders-sidebar {
            width: 600px;
            padding: 70px 56px;
        }

        .leaders-title {
            font-size: 60px;
        }

        .leader-name {
            font-size: 32px;
        }

        .leader-total {
            font-size: 42px;
        }
    }

    /* מסכים גדולים מאוד - 6000px ומעלה */
    @media (min-width: 6000px) {
        .live-donors-scroll {
            grid-template-columns: repeat(8, minmax(460px, 1fr));
            gap: 36px;
            padding: 32px;
        }

        .live-donor-card {
            padding: 44px 52px;
            min-height: 260px;
            gap: 44px;
        }

        .live-donor-progress-circle-wrapper {
            width: 200px;
            height: 200px;
            margin-left: 48px;
        }

        .live-donor-percentage {
            font-size: 48px;
        }

        .live-donor-name {
            font-size: 50px;
        }

        .live-donor-group,
        .live-donor-amount {
            font-size: 36px;
        }

        .live-leaders-sidebar {
            width: 660px;
            padding: 80px 64px;
        }

        .leaders-title {
            font-size: 66px;
        }

        .leader-name {
            font-size: 36px;
        }

        .leader-total {
            font-size: 48px;
        }
    }

    /* רספונסיבי */
    @media (max-width: 1024px) {
        .sidebar-nav {
            width: 220px;
        }

        .groups-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }

        .live-leaders-sidebar {
            width: 300px;
        }
    }
    /* תמיכה במסכי טלוויזיה גדולים - Android TV */
    @media (min-width: 1920px) {
        .sidebar-nav {
            max-width: 360px;
            min-width: 320px;
        }
        
        .nav-item {
            padding: 28px 40px;
            font-size: 26px;
            min-height: 70px;
        }
        
        .btn {
            padding: 20px 40px;
            font-size: 22px;
            min-height: 60px;
            min-width: 140px;
        }
        
        .content-section {
            padding: 60px;
        }
        
        .form-group input,
        .form-group select {
            padding: 18px;
            font-size: 20px;
            min-height: 56px;
        }
    }

    @media (min-width: 2560px) {
        .sidebar-nav {
            max-width: 400px;
            min-width: 360px;
        }
        
        .nav-item {
            padding: 32px 48px;
            font-size: 28px;
            min-height: 80px;
        }
        
        .btn {
            padding: 24px 48px;
            font-size: 24px;
            min-height: 68px;
            min-width: 160px;
        }
        
        .content-section {
            padding: 80px;
        }
        
        .form-group input,
        .form-group select {
            padding: 20px;
            font-size: 22px;
            min-height: 64px;
        }
    }

    /* תמיכה במסכים קטנים יותר (אם צריך) */
    @media (max-width: 768px) {
        .app-container {
            flex-direction: column;
        }

        .sidebar-nav {
        width: 100%;
            height: auto;
            flex-direction: row;
            border-left: none;
            border-bottom: 4px solid var(--primary-gold);
            max-width: 100%;
            min-width: 100%;
        }

        .nav-menu {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
        }

        .nav-item {
            padding: 18px 24px;
            white-space: nowrap;
            border-right: none;
            border-bottom: 4px solid transparent;
            min-height: 56px;
        }

        .nav-item.active {
            border-bottom-color: var(--primary-gold);
            border-right: none;
        }

        .nav-item.active::before {
            display: none;
        }

        .logo-container {
            padding: 15px;
        }

        .logo-img {
            max-height: 60px;
        }

        .content-section {
            padding: 20px;
        }

        .groups-grid {
            grid-template-columns: 1fr;
        }
    }
    .management-reset-panel,
    .liveview-settings-panel {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 16px;
        padding: 20px;
        margin: 20px 0;
        border: 2px solid var(--border);
        box-shadow: 0 4px 16px rgba(212, 175, 55, 0.15);
    }

    .liveview-settings-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(260px, 1fr));
        gap: 20px;
        margin-bottom: 20px;
        align-items: stretch;
    }

    .liveview-settings-grid .liveview-setting-group:nth-child(4) {
        grid-column: 2 / span 1;
    }

    @media (max-width: 1200px) {
        .liveview-settings-grid {
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }
        .liveview-settings-grid .liveview-setting-group:nth-child(4) {
            grid-column: auto;
        }
    }

    .liveview-setting-group {
        background: rgba(255, 255, 255, 0.6);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 16px;
    }

    .liveview-setting-group h4 {
        margin: 0 0 12px;
        font-size: 16px;
        color: var(--brown-dark);
        font-weight: 600;
    }

    .liveview-setting-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        margin-bottom: 12px;
    }

    .liveview-setting-row:last-child {
        margin-bottom: 0;
    }

    .liveview-setting-row > label:first-child {
        flex: 1;
        font-size: 14px;
        color: var(--brown-dark);
        font-weight: 500;
    }
    
    .liveview-setting-row .switch {
        flex-shrink: 0;
    }

    .liveview-setting-row input[type="range"] {
        flex: 2;
        max-width: 200px;
    }

    .liveview-setting-row input[type="color"] {
        width: 60px;
        height: 36px;
        border: 1px solid var(--border);
        border-radius: 6px;
        cursor: pointer;
    }

    .liveview-setting-row input[type="number"] {
        width: 80px;
        padding: 6px 10px;
        border: 1px solid var(--border);
        border-radius: 6px;
        font-size: 14px;
    }

    .liveview-setting-row select {
        flex: 2;
        padding: 6px 10px;
        border: 1px solid var(--border);
        border-radius: 6px;
        font-size: 14px;
        background: white;
        cursor: pointer;
    }

    .liveview-setting-row select:hover {
        border-color: var(--primary-gold);
    }

    .liveview-setting-row span {
        min-width: 50px;
        font-size: 14px;
        color: var(--muted);
        text-align: left;
    }

    .liveview-settings-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid var(--border);
    }
    .management-reset-panel h3 {
        margin: 0 0 12px;
        font-size: 18px;
        color: var(--brown-dark);
    }

    .reset-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 10px;
    }

    .reset-actions .btn {
        flex: 1 1 220px;
    }

    .reset-hint {
        font-size: 12px;
        color: var(--muted);
        margin: 0;
    }

    .home-finance-panel {
        margin-top: 30px;
        background: rgba(255, 255, 255, 0.92);
        border-radius: 18px;
        border: 2px solid var(--border);
        box-shadow: 0 10px 34px rgba(212, 175, 55, 0.18);
        padding: 28px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .home-finance-panel h2 {
        margin: 0;
        font-size: 26px;
        text-align: center;
        color: var(--brown-dark);
    }

    .finance-balance-row,
    .finance-entry-form {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
        justify-content: center;
    }

    .finance-balance-row label {
        font-weight: 600;
        color: var(--brown-dark);
    }

    .finance-balance-row input {
        width: 200px;
        padding: 10px;
        border: 2px solid var(--border);
        border-radius: 10px;
        font-size: 14px;
    }

    .finance-entry-form input,
    .finance-entry-form select {
        padding: 10px;
        border: 2px solid var(--border);
        border-radius: 10px;
        font-size: 14px;
    }

    .finance-entry-form input[type="number"] {
        width: 140px;
    }

    .finance-entry-form input[type="text"] {
        min-width: 180px;
    }

    .finance-summary-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 16px;
    }

    .finance-summary-card {
        background: linear-gradient(135deg, rgba(212, 175, 55, 0.18), rgba(255, 255, 255, 0.95));
        border: 1px solid rgba(212, 175, 55, 0.25);
        border-radius: 14px;
        padding: 18px;
        text-align: center;
    }

    .finance-summary-card h4 {
        margin: 0 0 8px;
        font-size: 16px;
        color: var(--brown-dark);
    }

    .finance-summary-card span {
        font-size: 20px;
        font-weight: 700;
        color: #007d8a;
    }

    .finance-entries-list {
        border: 1px solid var(--border);
        border-radius: 12px;
        overflow: hidden;
    }

    .finance-entry-item {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr auto;
        gap: 10px;
        align-items: center;
        padding: 12px 16px;
        background: rgba(255, 255, 255, 0.92);
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        font-size: 13px;
    }

    .finance-entry-item:last-child {
        border-bottom: none;
    }
    .finance-entry-type.expense {
        color: #d62828;
        font-weight: 600;
    }

    .finance-entry-empty {
        text-align: center;
        padding: 18px;
        color: var(--muted);
    }

    .finance-entry-item button {
        border: none;
        background: rgba(239, 68, 68, 0.88);
        color: #fff;
        border-radius: 8px;
        padding: 6px 12px;
        cursor: pointer;
        transition: background 0.2s ease;
    }

    .finance-entry-item button:hover {
        background: rgba(220, 38, 38, 0.95);
    }

    .finance-entry-meta {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 6px;
        text-align: left;
    }

    .finance-entry-meta small {
        color: var(--muted);
        font-weight: 500;
    }

    .finance-controls-row {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .finance-controls-row .btn-secondary {
        background: rgba(107, 114, 128, 0.9);
    }

    .finance-controls-row .btn-secondary:hover {
        background: rgba(75, 85, 99, 0.95);
    }

    .finance-analytics {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 20px;
    }

    .finance-analytics-header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
    }

    .finance-analytics-header h3 {
        margin: 0;
        font-size: 20px;
        color: var(--brown-dark);
    }

    .finance-analytics-filters {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
    }

    .finance-analytics-filters select,
    .finance-analytics-filters button {
        padding: 8px 12px;
        border: 2px solid var(--border);
        border-radius: 10px;
        font-size: 13px;
        background: #fff;
    }

    .finance-analytics-filters button {
        background: var(--primary-gold);
        color: var(--brown-dark);
        cursor: pointer;
        transition: background 0.2s ease;
    }

    .finance-analytics-filters button:hover {
        background: var(--primary-gold-dark);
        color: #fff;
    }

    .finance-analytics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 16px;
    }
    .finance-table {
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid var(--border);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 16px rgba(212, 175, 55, 0.15);
    }

    .finance-table h4 {
        margin: 0;
        padding: 12px 16px;
        background: rgba(212, 175, 55, 0.15);
        font-size: 16px;
        color: var(--brown-dark);
    }
    .finance-table table {
        width: 100%;
        border-collapse: collapse;
        direction: rtl;
    }
    .finance-table th,
    .finance-table td {
        padding: 10px 14px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        font-size: 13px;
        text-align: right;
    }

    .finance-table tbody tr:nth-child(odd) {
        background: rgba(0, 0, 0, 0.02);
    }

    .finance-table tbody tr:last-child td {
        border-bottom: none;
    }

    .donors-summary {
        margin: 10px 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 12px;
    }

    .donors-summary-card {
        background: rgba(255, 255, 255, 0.9);
        border: 2px solid var(--border);
        border-radius: 12px;
        padding: 14px;
        text-align: center;
        box-shadow: 0 4px 14px rgba(212, 175, 55, 0.16);
    }

    .donors-summary-card h4 {
        margin: 0 0 6px;
        font-size: 14px;
        color: var(--muted);
    }

    .donors-summary-card span {
        font-size: 18px;
        font-weight: 700;
        color: #007d8a;
    }

    .donors-summary-actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-bottom: 10px;
    }

    .donor-history {
        margin-top: 10px;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 10px;
        padding: 10px;
        display: none;
    }

    .donor-history.active {
        display: block;
    }

    .donor-history table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 10px;
    }

    .donor-history th,
    .donor-history td {
        font-size: 12px;
        padding: 6px 8px;
        text-align: right;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .donor-history tbody tr:nth-child(odd) {
        background: rgba(0, 0, 0, 0.03);
    }

    .donor-history-footer {
        font-size: 12px;
        color: var(--muted);
    }

    .donor-history-empty {
        text-align: center;
        color: var(--muted);
        padding: 8px 0;
    }

    .btn-small {
        padding: 12px 20px;
        font-size: clamp(14px, 0.9vw, 16px);
        min-height: 44px;
        min-width: 100px;
    }

    /* סנכרון נדרים פלוס */
    .btn-success {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
    }

    .btn-success:hover {
        background: linear-gradient(135deg, #059669 0%, #047857 100%);
    }

    .btn-success:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .btn-primary {
        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        color: white;
    }

    .btn-primary:hover {
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    }

    .btn-primary:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .nedarim-sync-status {
        margin-top: 12px;
        padding: 12px;
        border-radius: 8px;
        font-size: 14px;
        display: none;
    }

    .nedarim-sync-status.show {
        display: block;
    }

    .nedarim-sync-status.success {
        background: #d1fae5;
        color: #065f46;
        border: 1px solid #10b981;
    }

    .nedarim-sync-status.error {
        background: #fee2e2;
        color: #991b1b;
        border: 1px solid #ef4444;
    }

    .nedarim-sync-status.loading {
        background: #dbeafe;
        color: #1e40af;
        border: 1px solid #3b82f6;
    }

    /* מערכת הגרלות מפוארת */
    .raffle-section {
        background: linear-gradient(135deg, rgba(245, 230, 211, 0.95) 0%, rgba(255, 248, 220, 0.95) 100%);
    }
</style>

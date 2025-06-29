// src/assets/js/app.js
import "../scss/style.scss";

// jQuery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Popper.js
import { createPopper } from '@popperjs/core';

// Bootstrap
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

// Feather icons
import feather from "feather-icons";
window.feather = feather;

// Chart.js
import Chart from "chart.js/auto";
window.Chart = Chart;

// Swiper
import Swiper from 'swiper';
window.Swiper = Swiper;

// Moment.js
import moment from 'moment';
window.moment = moment;

// Daterangepicker
import daterangepicker from 'bootstrap-daterangepicker';
window.daterangepicker = daterangepicker;

// DataTables
import dataTables from 'datatables.net';
console.log('DataTables loaded:', !!dataTables); // Debug log
if (typeof dataTables === 'function') {
    window.dataTables = dataTables;
} else {
    console.error('DataTables not loaded as a function, delaying initialization');
    setTimeout(() => window.dataTables = dataTables, 100); // Delay as a fallback
}
import 'datatables.net-responsive';
console.log('jQuery loaded:', !!window.jQuery); // Debug log

// Dragula
import dragula from 'dragula';
window.dragula = dragula;

// Dropzone
import Dropzone from "dropzone";
window.Dropzone = Dropzone;

// FullCalendar
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
window.Calendar = Calendar;
window.dayGridPlugin = dayGridPlugin;
window.timeGridPlugin = timeGridPlugin;
window.listPlugin = listPlugin;

// Froala Editor
import FroalaEditor from 'froala-editor';
window.FroalaEditor = FroalaEditor;

// Progressbar.js
import ProgressBar from "progressbar.js";
window.ProgressBar = ProgressBar;

// SmartWizard
import smartWizard from 'smartwizard';
window.smartWizard = smartWizard;

// Lozad
import lozad from 'lozad';
window.lozad = lozad;

// Simplebar
import 'simplebar';

// Auth0
import { createAuth0Client } from '@auth0/auth0-spa-js';
window.auth0 = { createAuth0Client };

// Supabase
import { createClient } from '@supabase/supabase-js';
window.Supabase = { createClient };

// Global JS
import './core/functions.js';
import './core/main.js';
import './core/responsive.js';
import './core/color-scheme.js';

console.log('jQuery loaded:', !!window.jQuery);
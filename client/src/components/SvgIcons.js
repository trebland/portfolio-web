import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const DOTNET = "M2,15A1,1 0 0,1 3,16A1,1 0 0,1 2,17A1,1 0 0,1 1,16A1,1 0 0,1 2,15M21,17H19V9H17V7H23V9H21V17M16,7V9H14V11H16V13H14V15H16V17H12V7H16M11,7V17H9L6,11V17H4V7H6L9,13V7H11Z";
const HTML5 = "M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z";
const AWS = "M7.64,10.38C7.64,10.63 7.66,10.83 7.71,11C7.76,11.12 7.83,11.28 7.92,11.46C7.96,11.5 7.97,11.56 7.97,11.61C7.97,11.68 7.93,11.74 7.84,11.81L7.42,12.09C7.36,12.13 7.3,12.15 7.25,12.15C7.18,12.15 7.12,12.11 7.05,12.05C6.96,11.95 6.88,11.85 6.81,11.74C6.75,11.63 6.68,11.5 6.61,11.35C6.09,11.96 5.44,12.27 4.65,12.27C4.09,12.27 3.65,12.11 3.32,11.79C3,11.47 2.83,11.04 2.83,10.5C2.83,9.95 3.03,9.5 3.43,9.14C3.84,8.8 4.38,8.62 5.06,8.62C5.29,8.62 5.5,8.64 5.77,8.68C6,8.71 6.27,8.76 6.53,8.82V8.34C6.53,7.83 6.43,7.5 6.22,7.27C6,7.06 5.65,6.97 5.14,6.97C4.9,6.97 4.66,7 4.42,7.05C4.17,7.11 3.93,7.18 3.7,7.28C3.59,7.32 3.5,7.35 3.47,7.36C3.42,7.38 3.39,7.38 3.36,7.38C3.27,7.38 3.22,7.32 3.22,7.18V6.85C3.22,6.75 3.23,6.67 3.27,6.62C3.3,6.57 3.36,6.53 3.45,6.5C3.69,6.36 3.96,6.26 4.29,6.18C4.62,6.09 4.96,6.05 5.33,6.05C6.12,6.05 6.7,6.23 7.07,6.59C7.44,6.95 7.62,7.5 7.62,8.23V10.38H7.64M4.94,11.4C5.16,11.4 5.38,11.36 5.62,11.28C5.86,11.2 6.07,11.05 6.25,10.85C6.36,10.72 6.44,10.58 6.5,10.42C6.5,10.26 6.55,10.07 6.55,9.84V9.57C6.35,9.5 6.15,9.5 5.93,9.45C5.72,9.43 5.5,9.41 5.31,9.41C4.86,9.41 4.54,9.5 4.32,9.68C4.1,9.86 4,10.11 4,10.44C4,10.76 4.07,11 4.24,11.15C4.4,11.32 4.63,11.4 4.94,11.4M10.28,12.11C10.16,12.11 10.08,12.09 10,12.05C9.97,12 9.92,11.91 9.88,11.79L8.32,6.65C8.28,6.5 8.26,6.43 8.26,6.38C8.26,6.27 8.31,6.21 8.42,6.21H9.07C9.2,6.21 9.29,6.23 9.33,6.28C9.39,6.32 9.43,6.41 9.47,6.54L10.58,10.94L11.62,6.54C11.65,6.41 11.69,6.32 11.75,6.28C11.8,6.24 11.89,6.21 12,6.21H12.55C12.67,6.21 12.76,6.23 12.81,6.28C12.86,6.32 12.91,6.41 12.94,6.54L14,11L15.14,6.54C15.18,6.41 15.23,6.32 15.27,6.28C15.33,6.24 15.41,6.21 15.53,6.21H16.15C16.26,6.21 16.32,6.27 16.32,6.38C16.32,6.41 16.31,6.45 16.3,6.5C16.3,6.5 16.28,6.58 16.26,6.65L14.65,11.79C14.61,11.93 14.57,12 14.5,12.05C14.46,12.09 14.37,12.12 14.26,12.12H13.69C13.56,12.12 13.5,12.1 13.42,12.05C13.37,12 13.32,11.92 13.3,11.79L12.27,7.5L11.24,11.78C11.21,11.91 11.17,12 11.12,12.05C11.06,12.09 10.97,12.11 10.85,12.11H10.28M18.83,12.29C18.5,12.29 18.13,12.25 17.8,12.17C17.47,12.09 17.21,12 17.04,11.91C16.93,11.85 16.86,11.78 16.83,11.72C16.8,11.66 16.79,11.6 16.79,11.54V11.2C16.79,11.06 16.84,11 16.94,11C17,11 17,11 17.06,11C17.1,11 17.16,11.05 17.23,11.08C17.45,11.18 17.7,11.26 17.96,11.31C18.23,11.36 18.5,11.39 18.75,11.39C19.17,11.39 19.5,11.32 19.72,11.17C19.95,11 20.07,10.81 20.07,10.54C20.07,10.35 20,10.2 19.89,10.07C19.77,9.95 19.54,9.83 19.22,9.73L18.25,9.43C17.77,9.27 17.41,9.05 17.19,8.75C16.97,8.46 16.86,8.13 16.86,7.78C16.86,7.5 16.92,7.26 17.04,7.05C17.16,6.83 17.32,6.65 17.5,6.5C17.72,6.35 17.94,6.24 18.21,6.16C18.47,6.08 18.75,6.04 19.05,6.04C19.19,6.04 19.34,6.05 19.5,6.07C19.64,6.09 19.78,6.12 19.92,6.14C20.06,6.18 20.18,6.21 20.3,6.25C20.42,6.29 20.5,6.33 20.58,6.37C20.67,6.42 20.74,6.47 20.78,6.53C20.82,6.59 20.84,6.66 20.84,6.75V7.07C20.84,7.21 20.79,7.28 20.69,7.28C20.64,7.28 20.55,7.25 20.43,7.2C20.06,7.03 19.63,6.94 19.16,6.94C18.78,6.94 18.5,7 18.27,7.13C18.07,7.25 17.96,7.45 17.96,7.72C17.96,7.91 18.03,8.07 18.16,8.19C18.29,8.32 18.54,8.44 18.89,8.56L19.84,8.86C20.32,9 20.66,9.22 20.87,9.5C21.07,9.77 21.17,10.08 21.17,10.43C21.17,10.71 21.11,10.97 21,11.2C20.88,11.42 20.72,11.62 20.5,11.78C20.31,11.95 20.06,12.07 19.78,12.16C19.5,12.25 19.16,12.29 18.83,12.29M20.08,15.53C17.89,17.14 14.71,18 12,18C8.15,18 4.7,16.58 2.09,14.23C1.88,14.04 2.07,13.79 2.32,13.94C5.14,15.57 8.61,16.56 12.21,16.56C14.64,16.56 17.31,16.06 19.76,15C20.13,14.85 20.44,15.26 20.08,15.53M21,14.5C20.71,14.13 19.14,14.32 18.43,14.4C18.22,14.43 18.19,14.24 18.38,14.1C19.63,13.23 21.69,13.5 21.92,13.77C22.16,14.07 21.86,16.13 20.69,17.11C20.5,17.26 20.33,17.18 20.41,17C20.68,16.32 21.27,14.84 21,14.5Z";
const JS = "M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z";
const REACT = "M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z";
const CSS = "M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z";
const MATERIALUI = "M8,16.61V15.37L14,11.91V7.23L9,10.12L4,7.23V13L3,13.58L2,13V5L3.07,4.38L9,7.81L12.93,5.54L14.93,4.38L16,5V13.06L10.92,16L14.97,18.33L20,15.43V11L21,10.42L22,11V16.58L14.97,20.64L8,16.61M22,9.75L21,10.33L20,9.75V8.58L21,8L22,8.58V9.75Z";
const GITHUB = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z";
const ANDROID = "M16.61 15.15C16.15 15.15 15.77 14.78 15.77 14.32S16.15 13.5 16.61 13.5H16.61C17.07 13.5 17.45 13.86 17.45 14.32C17.45 14.78 17.07 15.15 16.61 15.15M7.41 15.15C6.95 15.15 6.57 14.78 6.57 14.32C6.57 13.86 6.95 13.5 7.41 13.5H7.41C7.87 13.5 8.24 13.86 8.24 14.32C8.24 14.78 7.87 15.15 7.41 15.15M16.91 10.14L18.58 7.26C18.67 7.09 18.61 6.88 18.45 6.79C18.28 6.69 18.07 6.75 18 6.92L16.29 9.83C14.95 9.22 13.5 8.9 12 8.91C10.47 8.91 9 9.24 7.73 9.82L6.04 6.91C5.95 6.74 5.74 6.68 5.57 6.78C5.4 6.87 5.35 7.08 5.44 7.25L7.1 10.13C4.25 11.69 2.29 14.58 2 18H22C21.72 14.59 19.77 11.7 16.91 10.14H16.91Z";
const IOS = "M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z";
const WEB = "M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";
const NODEJS = "M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z"
const UNITY = "M10.11,17H7.5L2.59,12L7.5,7H10.11L11.42,4.74L18.21,3L20.08,9.74L18.77,12L20.08,14.26L18.21,21L11.42,19.26L10.11,17M10.25,16.75L15.38,18.13L12.42,13H6.5L10.25,16.75M17.12,17.13L18.5,12L17.12,6.87L14.15,12L17.12,17.13M10.25,7.25L6.5,11H12.42L15.38,5.87L10.25,7.25Z"
const CSHARP = "M11.5,15.97L11.91,18.41C11.65,18.55 11.23,18.68 10.67,18.8C10.1,18.93 9.43,19 8.66,19C6.45,18.96 4.79,18.3 3.68,17.04C2.56,15.77 2,14.16 2,12.21C2.05,9.9 2.72,8.13 4,6.89C5.32,5.64 6.96,5 8.94,5C9.69,5 10.34,5.07 10.88,5.19C11.42,5.31 11.82,5.44 12.08,5.59L11.5,8.08L10.44,7.74C10.04,7.64 9.58,7.59 9.05,7.59C7.89,7.58 6.93,7.95 6.18,8.69C5.42,9.42 5.03,10.54 5,12.03C5,13.39 5.37,14.45 6.08,15.23C6.79,16 7.79,16.4 9.07,16.41L10.4,16.29C10.83,16.21 11.19,16.1 11.5,15.97M13.89,19L14.5,15H13L13.34,13H14.84L15.16,11H13.66L14,9H15.5L16.11,5H18.11L17.5,9H18.5L19.11,5H21.11L20.5,9H22L21.66,11H20.16L19.84,13H21.34L21,15H19.5L18.89,19H16.89L17.5,15H16.5L15.89,19H13.89M16.84,13H17.84L18.16,11H17.16L16.84,13Z"

const IconText = ({title, internalLink, children}) => (
    <span className="icon__wrap">
      <span className="icon__icon">{children}</span>
      <span style={{borderRadius: '20px'}} className="icon__description">{title}</span>
    </span>
)

/* Technologies */
const HtmlIcon = () => {
    return (<IconText title={"HTML5"}><SvgIcon aria-label="HTML Icon" className="tech-icon"><path d={HTML5} /></SvgIcon></IconText>)
}

const JsIcon = () => {
    return (<IconText title={"JavaScript"}><SvgIcon aria-label="JavaScript Icon" className="tech-icon"><path d={JS} /></SvgIcon></IconText>)
}

const CssIcon = () => {
    return (<IconText title={"CSS"}><SvgIcon aria-label="CSS Icon" className="tech-icon"><path d={CSS} /></SvgIcon></IconText>)
}

const ReactIcon = () => {
    return (<IconText title={"React.js"}><SvgIcon aria-label="React Icon" className="tech-icon"><path d={REACT} /></SvgIcon></IconText>)
}

const DotNetIcon = () => {
    return (<IconText title={"DotNet"}><SvgIcon aria-label="DotNet Icon" className="tech-icon"><path d={DOTNET} /></SvgIcon></IconText>)
}

const CSharpIcon = () => {
    return (<IconText title={"C#"}><SvgIcon aria-label="C Sharp Icon" className="tech-icon"><path d={CSHARP} /></SvgIcon></IconText>)
}

const NodeJsIcon = () => {
    return (<IconText title={"Node.js"}><SvgIcon aria-label="NodeJs Icon" className="tech-icon"><path d={NODEJS} /></SvgIcon></IconText>)
}

const ExpressIcon = () => {
    return (
        <IconText title={"Express.js"}>
            <SvgIcon aria-label="ExpressJs Icon" className="tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <path d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z"/>
                    <path d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z"/>
                </svg>
            </SvgIcon>
        </IconText>
    )
}

const MongoDbIcon = () => {
    return (
        <IconText title={"MongoDB"}>
            <SvgIcon aria-label="MongoDB Icon" className="tech-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path d="M51.167,0c-1.959,11.753-22.245,21.568-22.245,50.217c0,25.908,14.264,33.808,17.203,35.033  C51.511,79.617,50.677,33.056,51.167,0z"/>
                    <path d="M51.875,6.375c2.5,6.625,18.918,23.273,18.918,43.842s-9.06,30.118-16.895,35.749c0,0,0,7.897,0,9.611  s-1.377,2.571-2.234,2.571s-2.418-0.796-2.418-2.143s0-9.427,0-9.427C56.346,83.395,52.242,27.066,51.875,6.375z"/>
                </svg>
            </SvgIcon>
        </IconText>
    )
}

const ReduxIcon = () => {
    return (
        <IconText title={"Redux"}>
            <SvgIcon aria-label="Redux Icon" className="tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"/>
                    <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"/>
                    <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"/>
                </svg>
            </SvgIcon>
        </IconText>)
}

const PostgreSqlIcon = () => {
    return (
        <IconText title={"PostgreSQL"}>
            <SvgIcon aria-label="PostgreSQL Icon" className="tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" version="1.1">
                    <path stroke="none" fillRule="nonzero" fillOpacity="1" d="M 32.902344 6.601562 C 31.269531 6.601562 29.859375 7.039062 28.878906 7.476562 C 27.921875 7.152344 26.328125 6.601562 24.421875 7 C 23.308594 7.195312 22.285156 7.652344 21.347656 8.355469 C 19.804688 7.613281 18.191406 7.15625 16.5 7.082031 C 15.460938 7 11.21875 7.480469 9.699219 9.71875 C 9.140625 10.601562 8.578125 11.71875 8.339844 13.078125 C 8.097656 14.277344 8.097656 15.640625 8.5 18.441406 C 8.738281 20.359375 9.0625 21.640625 9.78125 24.277344 C 9.859375 24.519531 10.261719 25.800781 11.460938 29.320312 C 11.699219 29.960938 12.179688 31.160156 13.140625 32.277344 C 13.78125 33.078125 14.421875 33.558594 15.21875 33.558594 C 16.261719 33.558594 16.980469 32.839844 17.621094 32.039062 C 17.667969 31.988281 17.71875 31.929688 17.765625 31.875 C 17.703125 31.96875 17.652344 32.070312 17.621094 32.199219 C 17.460938 33 18.421875 33.640625 19.21875 33.960938 C 19.859375 34.277344 20.578125 34.359375 21.140625 34.359375 C 21.859375 34.359375 22.421875 34.199219 22.738281 34.121094 C 23.015625 34.027344 23.609375 33.773438 24.242188 33.351562 C 24.269531 35.394531 24.289062 37.804688 24.339844 38.359375 C 24.578125 40.441406 25.140625 41.878906 26.179688 42.679688 C 26.980469 43.320312 28.421875 43.398438 28.5 43.398438 C 29.9375 43.398438 32.179688 42.441406 33.140625 40.921875 C 33.621094 40.199219 33.78125 39.558594 33.9375 38.679688 C 34.097656 38.199219 34.257812 35.398438 34.339844 34.839844 C 34.449219 33.957031 34.53125 33.085938 34.617188 32.238281 C 35.144531 32.375 35.796875 32.523438 36.5 32.523438 C 37.78125 32.523438 39.460938 31.640625 39.78125 31.476562 C 40.421875 31 41.699219 29.882812 41.140625 28.921875 C 40.820312 28.359375 40.339844 28.359375 39.140625 28.523438 C 39.140625 28.523438 37.21875 28.757812 37.058594 28.679688 C 36.941406 28.632812 36.765625 28.523438 36.5625 28.375 C 36.980469 27.730469 37.347656 27.09375 37.78125 26.523438 C 38.738281 24.679688 39.300781 23.242188 39.703125 22.121094 C 40.421875 20.121094 40.820312 18.519531 41.058594 17.398438 C 41.621094 15 41.78125 13.882812 41.457031 12.601562 C 40.820312 10.359375 38.5 8.441406 37.539062 7.882812 C 36.898438 7.558594 35.300781 6.601562 32.902344 6.601562 Z M 32.902344 8.199219 C 34.902344 8.199219 36.261719 9 36.980469 9.320312 C 37.859375 9.800781 39.859375 11.398438 40.019531 12.917969 C 40.101562 13.800781 40.179688 14.679688 39.621094 17 C 39.300781 18.117188 38.980469 19.558594 38.257812 21.558594 C 37.859375 22.679688 37.378906 24.039062 36.421875 25.722656 C 36.394531 25.761719 36.367188 25.804688 36.34375 25.851562 C 36.4375 25.511719 36.5 25.242188 36.5 25.242188 C 36.660156 24.441406 36.660156 23.800781 36.578125 22.839844 C 36.5 22.359375 36.421875 21.160156 36.421875 20.679688 C 36.421875 20.441406 36.65625 17.960938 36.738281 17.078125 C 36.820312 15.640625 35.9375 13.878906 35.703125 13.558594 C 34.5 11.71875 33.859375 10.679688 32.578125 9.640625 C 32.261719 9.367188 31.714844 8.914062 30.96875 8.460938 C 31.558594 8.316406 32.207031 8.199219 32.902344 8.199219 Z M 25.832031 8.527344 C 26.875 8.554688 27.761719 8.839844 28.421875 9.082031 C 30.101562 9.640625 31.140625 10.519531 31.621094 10.917969 C 32.660156 11.800781 33.21875 12.679688 34.421875 14.523438 C 34.507812 14.695312 34.734375 15.070312 34.917969 15.585938 C 33.28125 15.4375 32.191406 16.011719 31.539062 16.601562 C 30.578125 17.398438 30.65625 18.601562 30.738281 19.476562 C 30.738281 20.117188 30.902344 20.921875 32.101562 23.640625 C 32.578125 24.839844 33.058594 26.117188 33.539062 27 C 33.789062 27.496094 34.09375 27.953125 34.421875 28.359375 C 34.234375 28.457031 34.039062 28.582031 33.859375 28.757812 C 33.378906 29.320312 33.296875 29.882812 33.140625 30.921875 C 32.980469 31.722656 32.820312 33.398438 32.738281 34.757812 C 32.738281 35.320312 32.5 38.039062 32.421875 38.441406 C 32.179688 39.242188 32.097656 39.640625 31.78125 40.121094 C 31.21875 41 29.460938 41.722656 28.421875 41.640625 C 28.101562 41.640625 27.621094 41.640625 27.21875 41.320312 C 26.339844 40.679688 26.019531 39.242188 25.9375 38.121094 C 25.859375 37.320312 25.9375 31.558594 25.78125 30.277344 C 25.699219 29.960938 25.621094 29.160156 24.980469 28.601562 C 24.710938 28.375 24.15625 28.257812 23.628906 28.179688 C 23.636719 27.914062 23.652344 27.644531 23.703125 27.398438 C 23.78125 26.917969 23.9375 26.679688 24.101562 26.277344 C 24.179688 26.039062 24.339844 25.722656 24.5 25.320312 C 25.21875 23.082031 25.058594 20.117188 24.65625 18.277344 C 24.578125 18.117188 24.257812 16.839844 23.140625 16.121094 C 21.9375 15.398438 20.65625 15.800781 19.9375 16.039062 C 19.640625 16.121094 19.347656 16.25 19.054688 16.398438 C 19.105469 16.066406 19.148438 15.726562 19.21875 15.398438 C 19.539062 13.800781 19.859375 12.441406 20.902344 11.082031 C 22.019531 9.71875 23.296875 8.839844 24.738281 8.601562 C 25.121094 8.539062 25.484375 8.519531 25.832031 8.527344 Z M 15.953125 8.667969 C 16.140625 8.664062 16.300781 8.667969 16.421875 8.679688 C 17.671875 8.746094 18.867188 9.039062 20.054688 9.539062 C 19.90625 9.703125 19.761719 9.867188 19.621094 10.039062 C 18.261719 11.640625 17.9375 13.320312 17.621094 15 C 17.21875 17 17.140625 19.078125 17.457031 21.160156 L 17.300781 22.679688 C 17.21875 23.476562 17.058594 25 17.9375 26.601562 C 18.25 27.132812 18.589844 27.582031 18.964844 27.964844 C 18.152344 29.039062 17.289062 30.054688 16.421875 31 C 15.9375 31.558594 15.539062 31.960938 15.21875 31.960938 C 15.140625 31.960938 14.820312 31.800781 14.339844 31.242188 C 13.457031 30.28125 13.140625 29.242188 12.980469 28.839844 C 12.019531 25.960938 11.460938 24.117188 11.378906 23.878906 C 10.738281 21.320312 10.421875 20.039062 10.097656 18.199219 C 9.699219 15.640625 9.699219 14.359375 9.9375 13.320312 C 10.179688 12.199219 10.578125 11.320312 10.980469 10.679688 C 11.960938 9.140625 14.65625 8.703125 15.953125 8.667969 Z M 34.3125 17.101562 C 34.566406 17.101562 34.84375 17.132812 35.140625 17.195312 C 35.128906 17.941406 34.820312 20.285156 34.820312 20.601562 C 34.820312 21.242188 34.980469 22.519531 34.980469 23 C 35.0625 23.882812 35.0625 24.359375 34.980469 25 C 34.980469 25 34.859375 25.570312 34.738281 25.976562 C 34.367188 25.136719 33.953125 24.132812 33.457031 23 C 32.257812 20.28125 32.179688 19.722656 32.179688 19.320312 C 32.179688 18.757812 32.179688 18.039062 32.65625 17.722656 C 33.109375 17.320312 33.65625 17.105469 34.3125 17.101562 Z M 21.890625 17.335938 C 22.050781 17.351562 22.199219 17.398438 22.339844 17.476562 C 22.980469 17.800781 23.140625 18.601562 23.140625 18.601562 C 23.539062 20.359375 23.699219 23 23.058594 24.757812 C 22.980469 25.078125 22.820312 25.320312 22.738281 25.558594 C 22.578125 25.960938 22.421875 26.359375 22.257812 27.078125 C 22.21875 27.375 22.199219 27.667969 22.1875 27.960938 C 21.636719 27.847656 21.113281 27.648438 20.738281 27.398438 C 20.097656 27.082031 19.621094 26.519531 19.300781 25.878906 C 18.738281 24.679688 18.820312 23.558594 18.902344 22.921875 L 19.058594 21.078125 C 18.945312 20.179688 18.890625 19.273438 18.90625 18.378906 C 19.273438 18.0625 19.753906 17.742188 20.421875 17.558594 C 20.902344 17.441406 21.425781 17.273438 21.890625 17.335938 Z M 33.6875 17.871094 C 33.480469 17.882812 33.257812 17.917969 33.140625 17.960938 C 32.820312 18.039062 32.738281 18.039062 32.65625 18.199219 C 32.578125 18.359375 32.820312 18.601562 32.902344 18.757812 C 32.980469 18.757812 33.21875 19 33.539062 18.921875 C 33.78125 18.839844 33.9375 18.679688 34.019531 18.601562 C 34.101562 18.519531 34.421875 18.117188 34.179688 17.960938 C 34.097656 17.878906 33.898438 17.859375 33.6875 17.871094 Z M 21.710938 18.453125 C 21.625 18.460938 21.539062 18.480469 21.457031 18.523438 C 21.378906 18.523438 21.21875 18.601562 21.140625 18.757812 C 21.058594 18.917969 21.140625 19.078125 21.21875 19.160156 C 21.378906 19.398438 21.621094 19.640625 22.019531 19.640625 C 22.101562 19.640625 22.421875 19.640625 22.65625 19.398438 C 22.65625 19.398438 22.902344 19.160156 22.902344 18.921875 C 22.820312 18.757812 22.660156 18.679688 22.421875 18.601562 C 22.238281 18.539062 21.96875 18.433594 21.710938 18.453125 Z M 20.238281 28.921875 C 20.730469 29.183594 21.320312 29.398438 21.96875 29.542969 C 21.796875 29.886719 21.546875 30.171875 21.300781 30.359375 C 20.738281 30.757812 20.019531 31 19.300781 31.160156 C 19.140625 31.160156 19.0625 31.242188 18.902344 31.242188 C 18.515625 31.351562 18.140625 31.472656 17.882812 31.738281 C 18.667969 30.867188 19.453125 29.902344 20.238281 28.921875 Z M 35.664062 29.5625 C 36.015625 29.824219 36.359375 30.019531 36.65625 30.121094 C 37.140625 30.28125 37.539062 30.28125 38.980469 30.121094 C 38.738281 30.359375 38.019531 30.757812 36.980469 30.921875 C 36.3125 30.988281 35.480469 30.828125 34.804688 30.632812 C 34.867188 30.179688 34.9375 29.921875 35.058594 29.800781 C 35.101562 29.757812 35.367188 29.679688 35.664062 29.5625 Z M 23.617188 29.804688 C 23.78125 29.832031 23.914062 29.851562 23.9375 29.878906 C 24.097656 30.039062 24.179688 30.441406 24.179688 30.601562 C 24.1875 30.738281 24.195312 31.085938 24.203125 31.324219 C 23.542969 32.097656 22.484375 32.523438 22.257812 32.601562 C 21.9375 32.757812 20.980469 32.917969 20.019531 32.601562 C 20.820312 32.359375 21.621094 32.121094 22.257812 31.640625 C 22.816406 31.242188 23.296875 30.601562 23.617188 29.804688 Z M 23.617188 29.804688 "/>
                </svg>
            </SvgIcon>
        </IconText>
    )
}

const FlutterIcon = () => {
    return (
        <IconText title={"Flutter"}>
            <SvgIcon aria-label="Flutter Icon" className="tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 512" version="1.1" >
                    <path d="M415.5129089,0.0000051L79.181015,337.1142273L0,257.8892822L257.290802,0h158.2221069 M414.5414734,238.3278046H256.3193359L118.5063324,376.4613342L253.8044739,512h156.969635L276.5163879,376.6739807L414.5414734,238.3278046z"/>
                </svg>
            </SvgIcon>
        </IconText>
    )
}

const MaterialUiIcon = () => {
    return (<IconText title={"MaterialUI"}><SvgIcon aria-label="MaterialUI Icon" className="tech-icon"><path d={MATERIALUI} /></SvgIcon></IconText>)
}

const UnityIcon = () => {
    return (<IconText title={"Unity"}><SvgIcon aria-label="Unity Icon" className="tech-icon"><path d={UNITY} /></SvgIcon></IconText>)
}

const AwsIcon = () => {
    return (<IconText title={"AWS"}><SvgIcon aria-label="AWS Icon" className="tech-icon"><path d={AWS} /></SvgIcon></IconText>)
}


/* Used for external linking */
const WebIcon = () => {
    return (<SvgIcon aria-label="Website Icon" className="tech-icon"><path d={WEB} /></SvgIcon>)
}

const AndroidIcon = () => {
    return (<SvgIcon aria-label="Android Icon" className="tech-icon"><path d={ANDROID} /></SvgIcon>)
}

const IosIcon = () => {
    return (<SvgIcon aria-label="iOS Icon" className="tech-icon"><path d={IOS} /></SvgIcon>)
}

const GithubIcon = () => {
    return (<SvgIcon aria-label="GitHub Icon" className="tech-icon"><path d={GITHUB} /></SvgIcon>)
}

export {
    // Languages
    HtmlIcon,
    JsIcon,
    CssIcon,
    DotNetIcon,
    ExpressIcon,
    CSharpIcon,
    // Frameworks (or framework additions)
    ReactIcon,
    ReduxIcon,
    MaterialUiIcon,
    FlutterIcon,
    NodeJsIcon,
    MongoDbIcon,
    PostgreSqlIcon,
    // Technologies not previously mentioned
    AwsIcon,
    UnityIcon,
    WebIcon,
    AndroidIcon,
    IosIcon,
    GithubIcon,
}
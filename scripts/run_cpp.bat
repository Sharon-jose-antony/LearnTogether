@echo off
REM Helper script to compile and run any C++ source file in the project
IF "%~1"=="" (
    echo Usage: run_cpp.bat ^<path_to_cpp_file^>
    echo Example: run_cpp.bat src\01_Foundations\Hello_Syntax.cpp
    exit /b 1
)

echo Compiling C++ file: %1 ...
g++ -std=c++17 -O2 "%~1" -o output.exe

IF %ERRORLEVEL% EQU 0 (
    echo [BUILD SUCCESS] Running output.exe...
    echo --------------------------------------------------
    output.exe
    echo --------------------------------------------------
    del output.exe
) ELSE (
    echo [BUILD FAILED] Please check C++ compilation errors above.
)

@echo off
REM Helper script to compile and run any Java source file in the project
IF "%~1"=="" (
    echo Usage: run_java.bat ^<path_to_java_file^>
    echo Example: run_java.bat src\01_Foundations\Hello_Syntax.java
    exit /b 1
)

echo Compiling Java file: %1 ...
javac "%~1"

IF %ERRORLEVEL% EQU 0 (
    echo [BUILD SUCCESS] Running Java class...
    echo --------------------------------------------------
    REM Get directory and file basename
    for %%F in ("%~1") do set DIR=%%~dpF& set FILE=%%~nF
    cd "%DIR%"
    java %FILE%
    del *.class
    echo --------------------------------------------------
) ELSE (
    echo [BUILD FAILED] Please check Java compilation errors above.
)
